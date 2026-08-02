import Link from "next/link";

const members = [
  {
    name: "Samim Ayubi",
    role: "Fullstack-Entwickler & ERP-Experte",
    avatar: "/Samim.jpeg",
    link: "#",
  },
  {
    name: "Elias Ayoubi",
    role: "Experte für Mobile & Barrierefreiheit",
    avatar: "/Elias.jpeg",
    link: "#",
  },
  {
    name: "Ali Ignis",
    role: "Fullstack-Entwickler • Software-Berater",
    avatar: "/Ali.jpeg",
    link: "#",
  },
  {
    name: "Soner Şen",
    role: "Senior Flutter-Entwickler • UI/UX-Enthusiast",
    avatar: "/Soner.png",
    link: "#",
  }
];

export default function TeamSection() {
  return (
    <section className="dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-12">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">Unser Team</h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p className="text-muted-foreground text-xl">
             Unser Team besteht aus erfahrenen Entwicklern und Designern, die sich darauf spezialisiert haben, innovative und benutzerfreundliche Softwarelösungen zu entwickeln.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    {/*<span className="text-xs">_0{index + 1}</span>*/}
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    {/*<Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {" "}
                      Linktree
                    </Link>*/}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
