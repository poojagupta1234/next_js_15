import Image from "next/image";
// components/TeamSection.tsx
const team = [
  { id:"1", name: "Pooja Gupta", role: "Frontend Developer" },
  { id:"2",name: "Alok Mali", role: "Backend Developer" },
  { id:"3",name: "Manpreet Singh", role: "UI/UX Designer" },
  { id:"4",name: "Rajiv Gupta", role: "Frontend Developer" },
  { id:"5",name: "Priya Mali", role: "Backend Developer" },
  { id:"6",name: "AnuPreet Singh", role: "UI/UX Designer" },
];

export default function TeamSection() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition hover:scale-105"
          >
            <div className="flex justify-center mb-4">
                <Image
                            src={'/images/user-admin-svgrepo-com.svg'}
                            alt="User Avatar"
                            width={96}
                            height={96}
                            className="object-cover"
                          />
              </div>
            <div className="text-xl font-medium mb-2">{member.name}</div>
            <div className="text-gray-500">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
