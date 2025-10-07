import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Briefcase, GraduationCap } from "lucide-react";

const Leadership = () => {
  const team = [
    {
      name: "Gopal Kumar",
      position: "Founder & CEO",
      bio: "With over 40 years of construction industry experience, Gopal Kumar founded the company with a vision to deliver world-class construction services. He holds a degree in Civil Engineering and has led the company to become one of the most trusted names in the industry.",
      expertise: "Strategic Planning, Business Development",
    },
    {
      name: "Rajesh Sharma",
      position: "Chief Technical Officer",
      bio: "Rajesh brings 25+ years of expertise in civil engineering and project management. He oversees all technical operations, ensuring quality standards and innovation in construction methodologies.",
      expertise: "Civil Engineering, Quality Assurance",
    },
    {
      name: "Priya Verma",
      position: "Head of Operations",
      bio: "With an MBA and 20 years of operational excellence, Priya manages day-to-day operations, resource planning, and ensures timely project delivery across all verticals.",
      expertise: "Operations Management, Resource Planning",
    },
    {
      name: "Amit Patel",
      position: "Chief Financial Officer",
      bio: "A chartered accountant with 18 years of experience, Amit manages financial planning, compliance, and ensures fiscal responsibility across all projects.",
      expertise: "Financial Management, Compliance",
    },
  ];

  const strengths = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "100+ certified engineers and skilled workers with decades of combined experience",
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description: "ISO certified company with team holding multiple industry certifications",
    },
    {
      icon: Briefcase,
      title: "40+ Years Experience",
      description: "Proven track record of delivering complex projects across multiple sectors",
    },
    {
      icon: GraduationCap,
      title: "Continuous Training",
      description: "Regular skill development and safety training programs for all team members",
    },
  ];

  return (
    <>
      {/* Leadership Team */}
      <section id="leadership" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent font-semibold text-lg mb-2">OUR LEADERSHIP</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="heading-gradient">Expert Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Led by industry veterans with decades of experience in construction and engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-border card-hover">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-accent font-semibold mb-3">{member.position}</p>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        {member.bio}
                      </p>
                      <div className="inline-block bg-muted px-3 py-1 rounded-full">
                        <p className="text-sm font-medium text-foreground">{member.expertise}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Strengths */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="heading-gradient">Our Team</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <Card key={index} className="border-border card-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{strength.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {strength.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
