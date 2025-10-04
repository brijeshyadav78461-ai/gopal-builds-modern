import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Building Dreams Into{" "}
            <span className="text-accent">Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Premier construction services with 15+ years of excellence in residential, commercial, and industrial projects
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-accent border-0 text-lg px-8 py-6 hover:shadow-glow transition-all duration-300"
            >
              Start Your Project <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Building2 className="w-12 h-12 text-accent mx-auto mb-3" />
              <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Award className="w-12 h-12 text-accent mx-auto mb-3" />
              <h3 className="text-4xl font-bold text-white mb-2">15+</h3>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Users className="w-12 h-12 text-accent mx-auto mb-3" />
              <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
