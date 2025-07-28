'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const [isAllowed, setIsAllowed] = useState(false)
  const [checked, setChecked] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin')
    const loginTime = localStorage.getItem('adminLoginTime')
    const now = Date.now()

    if (isAdmin === 'true' && loginTime) {
      const diff = now - parseInt(loginTime, 10)

      if (diff < 20 * 60 * 1000) { // 20 минут
        setIsAllowed(true)
        setChecked(true)

        // 🔁 Авто-логаут через остаток времени
        const timeout = setTimeout(() => {
          localStorage.removeItem('isAdmin')
          localStorage.removeItem('adminLoginTime')
          router.replace('/admin/login')
        }, 20 * 60 * 1000 - diff)

        return () => clearTimeout(timeout)
      } else {
        localStorage.removeItem('isAdmin')
        localStorage.removeItem('adminLoginTime')
        router.replace('/admin/login')
      }
    } else {
      router.replace('/admin/login')
    }
  }, [])

  if (!checked) return <div className="p-8">Загрузка...</div>
  if (!isAllowed) return null

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Админка: Добавить Тойхану</h1>
        <button
          onClick={() => {
            localStorage.removeItem('isAdmin')
            localStorage.removeItem('adminLoginTime')
            router.replace('/admin/login')
          }}
          className="text-sm text-red-600 hover:underline"
        >
          Выйти
        </button>
      </div>
    </div>
  )
}
