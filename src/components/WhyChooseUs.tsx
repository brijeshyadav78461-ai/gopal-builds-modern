import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, DollarSign, Users, Sparkles, Award, Wrench, ThumbsUp } from "lucide-react";

const WhyChooseUs = () => {
  const strengths = [
    {
      icon: Award,
      title: "40+ Years of Excellence",
      description: "Four decades of proven track record in delivering quality construction projects across India",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "98% on-time project completion rate with strict adherence to timelines and milestones",
    },
    {
      icon: Shield,
      title: "Safety First Approach",
      description: "Zero-accident policy with comprehensive safety training and modern equipment",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden costs, detailed quotations, and value-for-money solutions",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "100+ certified engineers, architects, and skilled workers with specialized expertise",
    },
    {
      icon: Sparkles,
      title: "Modern Equipment",
      description: "Latest machinery and technology for efficient and precise construction",
    },
    {
      icon: Wrench,
      title: "Quality Materials",
      description: "Only premium quality materials sourced from certified suppliers and manufacturers",
    },
    {
      icon: ThumbsUp,
      title: "Post-Completion Support",
      description: "Warranty and maintenance support ensuring long-term satisfaction",
    },
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-lg mb-2">WHY CHOOSE US</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="heading-gradient">Unique Strengths</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What sets us apart in the construction industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <Card key={index} className="border-border card-hover group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {strength.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
