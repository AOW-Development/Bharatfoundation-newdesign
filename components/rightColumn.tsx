import React from "react";

const RightColumn = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">You May Support to</h2>
      <div className="space-y-4">
        {[
          {
            title: "Youth Sports Development",
            description:
              "Organize training camps, coaching programs, and competitions for underprivileged children.",
          },
          {
            title: "School Sports Integration",
            description:
              "Provide sports equipment and coaching to schools that lack resources.",
          },
          {
            title: "Sports for Women Empowerment",
            description:
              "Promote female participation in sports through mentorship, training, and tournaments.",
          },
          {
            title: "Paralympic& Adaptive Sports",
            description:
              "Support athletes with disabilities by offering specialized training and facilities.",
          },
          {
            title: "Community Sports Centres",
            description:
              "Build or refurbish local playgrounds, fields, and courts to encourage sports participation.",
          },
          {
            title: "Health& Fitness through Sports",
            description:
              "Conduct awareness campaigns on physical fitness and mental health benefits of sports.",
          },
          {
            title: "Anti- Drug& Rehabilitation through Sports",
            description:
              "Use sports as a tool for rehabilitation and preventing substance abuse.",
          },
          {
            title: "Scholarship Programs",
            description:
              "Provide scholarships to talented young athletes who lack financial support.",
          },
          {
            title: "Sports for Social Inclusion",
            description:
              "Promote sports programs for marginalized communities, including refugees and orphans.",
          },
          {
            title: "Senior Citizen Wellness Sports Programs",
            description:
              "Organize light sports activities for elderly individuals to promote healthy aging.",
          },
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightColumn;
