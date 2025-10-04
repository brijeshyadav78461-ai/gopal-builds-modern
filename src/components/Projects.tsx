import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import industrialImg from "@/assets/project-industrial.jpg";

const Projects = () => {
  const projects = [
    {
      image: residentialImg,
      title: "Luxury Villa Complex",
      category: "Residential",
      description: "Modern luxury villas with contemporary design and premium amenities",
      stats: { area: "15,000 sq ft", duration: "18 months" },
    },
    {
      image: commercialImg,
      title: "Corporate Tower",
      category: "Commercial",
      description: "20-story office building with state-of-the-art facilities",
      stats: { area: "50,000 sq ft", duration: "24 months" },
    },
    {
      image: industrialImg,
      title: "Manufacturing Facility",
      category: "Industrial",
      description: "Large-scale industrial warehouse with advanced infrastructure",
      stats: { area: "80,000 sq ft", duration: "20 months" },
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-lg mb-2">OUR WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="heading-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successfully delivered projects that showcase our expertise and commitment to excellence
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border card-hover group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 right-4 bg-accent text-white border-0">
                  {project.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4 text-sm">
                  <div className="flex-1">
                    <p className="text-muted-foreground">Area</p>
                    <p className="font-semibold text-foreground">{project.stats.area}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground">Duration</p>
                    <p className="font-semibold text-foreground">{project.stats.duration}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
