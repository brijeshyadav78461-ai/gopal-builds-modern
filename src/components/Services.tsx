import { Home, Building2, Warehouse, Hammer, Wrench, PaintBucket } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, renovations, and additions built with precision and care for your family's comfort.",
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      description: "Office buildings, retail spaces, and commercial complexes designed for business success.",
    },
    {
      icon: Warehouse,
      title: "Industrial Facilities",
      description: "Warehouses, factories, and industrial structures built to support your operations.",
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our expert renovation and remodeling services.",
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Ongoing maintenance and repair services to keep your property in perfect condition.",
    },
    {
      icon: PaintBucket,
      title: "Interior & Finishing",
      description: "Premium interior design and finishing touches that bring your vision to life.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-lg mb-2">WHAT WE OFFER</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="heading-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs and exceed expectations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="card-hover border-border bg-card group cursor-pointer"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
