import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileCheck, Award, Building } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: "MSME Registered",
      description: "Micro, Small & Medium Enterprises registration ensuring government recognition and support",
      badge: "Verified",
    },
    {
      icon: FileCheck,
      title: "GST Certified",
      description: "Valid GST registration with full tax compliance and transparency",
      badge: "Active",
    },
    {
      icon: Award,
      title: "PF Registration",
      description: "Employee Provident Fund compliance ensuring worker welfare and benefits",
      badge: "Compliant",
    },
    {
      icon: Building,
      title: "ISO Certified",
      description: "ISO 9001:2015 certification for quality management systems",
      badge: "Certified",
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-lg mb-2">TRUST & COMPLIANCE</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="heading-gradient">Compliance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fully certified and compliant with all legal and regulatory requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card key={index} className="border-border card-hover">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <Badge className="mb-3 bg-primary text-primary-foreground">{cert.badge}</Badge>
                  <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="border-border inline-block">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                All certificates are available for verification.{" "}
                <a href="#contact" className="text-accent font-semibold hover:underline">
                  Contact us
                </a>{" "}
                for downloadable copies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
