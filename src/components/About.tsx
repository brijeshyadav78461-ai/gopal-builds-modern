import { CheckCircle2, History, Target, Lightbulb, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    "Expert Team of Certified Professionals",
    "Quality Materials & Modern Equipment",
    "On-Time Project Delivery",
    "Transparent Pricing & No Hidden Costs",
    "Safety-First Approach",
    "Post-Construction Support",
  ];

  return (
    <>
      <section id="about" className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <p className="text-accent font-semibold text-lg mb-2">WHO WE ARE</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Building Excellence Since{" "}
                  <span className="heading-gradient">1987</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Gopal Builders is a leading construction company dedicated to transforming visions into reality. 
                With over 40+ years of industry experience since 1987, we've established ourselves as trusted partners in 
                delivering high-quality construction projects across residential, commercial, industrial, and infrastructure sectors.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our commitment to excellence, attention to detail, and customer satisfaction has made us the 
                preferred choice for clients seeking reliable and professional construction services. We are fully 
                compliant with all legal requirements including MSME registration, PF, GST, and maintain the highest 
                standards of safety and quality.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-8 shadow-card card-hover border border-border">
                <h3 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  1000+
                </h3>
                <p className="text-muted-foreground font-medium">Projects Delivered</p>
              </div>
              <div className="bg-card rounded-xl p-8 shadow-card card-hover border border-border">
                <h3 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  40+
                </h3>
                <p className="text-muted-foreground font-medium">Years in Business</p>
              </div>
              <div className="bg-card rounded-xl p-8 shadow-card card-hover border border-border">
                <h3 className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  100+
                </h3>
                <p className="text-muted-foreground font-medium">Expert Team Members</p>
              </div>
              <div className="bg-card rounded-xl p-8 shadow-card card-hover border border-border">
                <h3 className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  100%
                </h3>
                <p className="text-muted-foreground font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-lg mb-2">OUR JOURNEY</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="heading-gradient">Our History</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <History className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Founded in 1987</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Gopal Builders was established in 1987 with a vision to deliver world-class construction services. 
                      Starting as a small residential contractor, we've grown into a comprehensive construction solutions 
                      provider handling projects across multiple sectors including civil engineering, infrastructure 
                      development, and turnkey solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Legal & Compliance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We maintain full compliance with all regulatory requirements. Our company is registered under MSME, 
                      holds valid GST and PF registrations, and adheres to all safety and quality standards mandated by 
                      government authorities. We are ISO certified and follow international best practices in all our 
                      construction activities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="heading-gradient">Core Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border card-hover">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred construction partner in India, known for innovation, 
                  quality, and timely delivery. We envision building sustainable infrastructure that shapes 
                  the future of our nation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border card-hover">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional construction services that exceed client expectations through 
                  continuous innovation, skilled workforce, and unwavering commitment to quality, safety, 
                  and environmental responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border card-hover">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, Excellence, Safety, Innovation, and Customer Satisfaction are the pillars 
                  of our business. We believe in building long-term relationships based on trust, 
                  transparency, and delivering value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-primary p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-6xl font-bold">GB</span>
                    </div>
                    <h3 className="text-xl font-bold">Gopal Kumar</h3>
                    <p className="text-white/80">Founder & CEO</p>
                  </div>
                </div>
                <CardContent className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">Message from the Founder</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "Since founding Gopal Builders in 1987, our journey has been driven by a simple philosophy: 
                    deliver quality that stands the test of time. Over the past four decades, we've had the 
                    privilege of building homes, offices, factories, and infrastructure that serve communities 
                    and drive economic growth."
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    "Our success is built on the trust of our clients, the dedication of our team, and our 
                    unwavering commitment to excellence. As we look to the future, we remain committed to 
                    innovation, sustainability, and creating value for all our stakeholders. Thank you for 
                    being part of our journey."
                  </p>
                  <p className="text-foreground font-semibold mt-4">- Gopal Kumar, Founder & CEO</p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
