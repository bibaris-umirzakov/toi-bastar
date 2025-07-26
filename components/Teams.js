export default function Teams() {
    const team = [
        { name: 'Ergesh Enlik', role: 'UI/UX Designer', image: '/team/enlik.png' },
        { name: 'Beibarys Omirzakov', role: 'Tech-Lead', image: '/team/beibarys.png' },
        { name: 'Arystan Symbat', role: 'Frontend Developer', image: '/team/symbat.png' },
        { name: 'Bekbergen Nurdaulet', role: 'Frontend Developer', image: '/team/nurdaulet.png' },
        { name: 'Magzhan Abdikaiyr', role: 'Backend Developer', image: '/team/magzhan.png' },
        { name: 'Moldiyar Sagi', role: 'Backend Developer', image: '/team/chel.png' },
        { name: 'Bayymbetov Askhat', role: 'Frontend Developer', image: '/team/chel.png' },
        { name: 'Ybrai Nurzhan', role: 'Frontend Developer', image: '/team/chel.png' },
    ];

    return (
        <section className="bg-white py-16 px-4 md:px-8">
            <div className="container mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A1A1A]">
                    Кто стоит за <span className="text-[#FFA500]">Toi</span><span className="text-[#003366]">Bastar</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 lg:gap-14 justify-items-center">
                    {team.map((person, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-md mb-4 bg-gray-100">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm sm:text-base font-semibold text-[#1A1A1A]">{person.name}</p>
                            <p className="text-xs sm:text-sm text-gray-600">{person.role}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-12 text-center text-base sm:text-lg font-semibold text-[#1A1A1A] max-w-2xl mx-auto">
                    Наша миссия — помочь организовать ваш праздник без лишних хлопот.
                </p>
            </div>
        </section>
    );
}
