import { CheckCircle2 } from "lucide-react";

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
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <p className="text-accent font-semibold text-lg mb-2">WHO WE ARE</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Building Excellence Since{" "}
                <span className="heading-gradient">2009</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Gopal Builders is a leading construction company dedicated to transforming visions into reality. 
              With over 15 years of industry experience, we've established ourselves as trusted partners in 
              delivering high-quality construction projects across residential, commercial, and industrial sectors.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our commitment to excellence, attention to detail, and customer satisfaction has made us the 
              preferred choice for clients seeking reliable and professional construction services.
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
                500+
              </h3>
              <p className="text-muted-foreground font-medium">Projects Delivered</p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-card card-hover border border-border">
              <h3 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                15+
              </h3>
              <p className="text-muted-foreground font-medium">Years in Business</p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-card card-hover border border-border">
              <h3 className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                50+
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
  );
};

export default About;
