import { Home, Building2, Warehouse, Hammer, Wrench, PaintBucket, Layers, Droplet, TreePine, Factory, HardHat, Ruler } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const mainServices = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, renovations, and additions built with precision and care for your family's comfort.",
      details: "From luxury villas to apartment complexes, we handle all aspects of residential construction including planning, design, execution, and handover.",
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      description: "Office buildings, retail spaces, and commercial complexes designed for business success.",
      details: "Corporate offices, shopping malls, hotels, and commercial complexes built to modern standards with focus on functionality and aesthetics.",
    },
    {
      icon: Warehouse,
      title: "Industrial Facilities",
      description: "Warehouses, factories, and industrial structures built to support your operations.",
      details: "Complete industrial construction including factories, warehouses, cold storage, and specialized facilities with advanced infrastructure.",
    },
    {
      icon: Layers,
      title: "Civil Engineering",
      description: "Comprehensive civil engineering services for all types of construction projects.",
      details: "Site development, earthwork, foundation work, structural engineering, and all civil works executed by certified engineers.",
    },
    {
      icon: Factory,
      title: "Infrastructure Development",
      description: "Roads, bridges, and public infrastructure projects that serve communities.",
      details: "Government and private infrastructure projects including roads, bridges, drainage systems, and public utility works.",
    },
    {
      icon: HardHat,
      title: "Turnkey Solutions",
      description: "End-to-end project management from concept to completion.",
      details: "Complete project lifecycle management including design, procurement, construction, testing, and commissioning delivered on time and budget.",
    },
  ];

  const specializedServices = [
    {
      icon: Droplet,
      title: "ETP/STP/UGT Systems",
      description: "Effluent Treatment Plants, Sewage Treatment Plants, and Underground Tank systems designed and installed by experts.",
    },
    {
      icon: TreePine,
      title: "Rainwater Harvesting",
      description: "Sustainable water conservation solutions including rainwater harvesting systems for residential and commercial properties.",
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with expert renovation and remodeling services for homes and offices.",
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Ongoing maintenance and repair services to keep your property in perfect condition with AMC options.",
    },
    {
      icon: PaintBucket,
      title: "Interior & Finishing",
      description: "Premium interior design and finishing touches including flooring, painting, and décor work.",
    },
    {
      icon: Ruler,
      title: "Project Consultation",
      description: "Expert consultation services for project planning, feasibility studies, and cost estimation.",
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

        {/* Tabbed Services */}
        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="main">Core Services</TabsTrigger>
            <TabsTrigger value="specialized">Specialized Services</TabsTrigger>
          </TabsList>

          <TabsContent value="main">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => {
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
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                        {service.details}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="specialized">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="card-hover border-border bg-card group cursor-pointer"
                  >
                    <CardHeader>
                      <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
