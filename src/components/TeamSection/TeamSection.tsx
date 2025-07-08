// components/TeamSection.tsx
const team = [
  { name: "Pooja Gupta", role: "Frontend Developer" },
  { name: "Alok Mali", role: "Backend Developer" },
  { name: "Manpreet Singh", role: "UI/UX Designer" },
];

export default function TeamSection() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-xl font-medium mb-2">{member.name}</div>
            <div className="text-gray-500">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
