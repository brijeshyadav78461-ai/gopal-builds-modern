import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import industrialImg from "@/assets/project-industrial.jpg";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allProjects = [
    {
      image: residentialImg,
      title: "Luxury Villa Complex - Green Meadows",
      category: "Residential",
      client: "DLF Limited",
      location: "Gurgaon, Haryana",
      description: "Premium gated community with 50 luxury villas featuring modern architecture, landscaped gardens, and world-class amenities",
      stats: { area: "15,000 sq ft", duration: "18 months", year: "2023" },
      scope: "Complete construction with interior finishing",
    },
    {
      image: commercialImg,
      title: "Tech Park Corporate Tower",
      category: "Commercial",
      client: "Prestige Group",
      location: "Bangalore, Karnataka",
      description: "20-story Grade-A office building with LEED certification, modern facilities, and sustainable design elements",
      stats: { area: "50,000 sq ft", duration: "24 months", year: "2022" },
      scope: "Turnkey project from design to completion",
    },
    {
      image: industrialImg,
      title: "Automotive Manufacturing Plant",
      category: "Industrial",
      client: "Mahindra Group",
      location: "Pune, Maharashtra",
      description: "State-of-the-art manufacturing facility with automated systems, quality control areas, and worker amenities",
      stats: { area: "80,000 sq ft", duration: "20 months", year: "2023" },
      scope: "Civil + Structural + MEP works",
    },
    {
      image: residentialImg,
      title: "Affordable Housing Project",
      category: "Residential",
      client: "State Government",
      location: "Lucknow, UP",
      description: "500-unit affordable housing complex as part of PMAY scheme with complete infrastructure",
      stats: { area: "25,000 sq ft", duration: "30 months", year: "2021" },
      scope: "Mass housing construction",
    },
    {
      image: commercialImg,
      title: "Shopping Mall Complex",
      category: "Commercial",
      client: "Oberoi Realty",
      location: "Mumbai, Maharashtra",
      description: "Multi-level retail and entertainment destination with parking, food court, and multiplex facilities",
      stats: { area: "100,000 sq ft", duration: "36 months", year: "2020" },
      scope: "Complete mall construction and finishing",
    },
    {
      image: industrialImg,
      title: "Highway Infrastructure Project",
      category: "Infrastructure",
      client: "National Highways Authority",
      location: "Delhi-Jaipur Highway",
      description: "60 km highway construction including bridges, drainage, and road safety features",
      stats: { area: "60 km", duration: "24 months", year: "2022" },
      scope: "Road construction and infrastructure",
    },
    {
      image: residentialImg,
      title: "Educational Institution Campus",
      category: "Institutional",
      client: "Private University",
      location: "Hyderabad, Telangana",
      description: "Complete university campus with academic blocks, hostels, sports facilities, and administrative buildings",
      stats: { area: "40,000 sq ft", duration: "30 months", year: "2021" },
      scope: "Multi-building campus development",
    },
    {
      image: industrialImg,
      title: "Water Treatment Plant",
      category: "Infrastructure",
      client: "Municipal Corporation",
      location: "Indore, MP",
      description: "Advanced STP with capacity of 50 MLD serving population of 500,000 with modern treatment technology",
      stats: { area: "50 MLD", duration: "18 months", year: "2023" },
      scope: "ETP/STP design and construction",
    },
    {
      image: commercialImg,
      title: "Hospital & Medical Center",
      category: "Institutional",
      client: "Healthcare Trust",
      location: "Chennai, Tamil Nadu",
      description: "300-bed multi-specialty hospital with advanced medical equipment, ICUs, and patient care facilities",
      stats: { area: "75,000 sq ft", duration: "28 months", year: "2022" },
      scope: "Healthcare facility construction",
    },
  ];

  const categories = ["All", "Residential", "Commercial", "Industrial", "Infrastructure", "Institutional"];

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-accent font-semibold text-lg mb-2">OUR WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="heading-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of 1000+ successfully delivered projects across multiple sectors
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-gradient-accent border-0" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-accent text-white border-0">
                  {project.category}
                </Badge>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">{project.client}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-3 pb-3 border-b border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Area/Scope</p>
                    <p className="font-semibold text-sm text-foreground">{project.stats.area}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="font-semibold text-sm text-foreground">{project.stats.duration}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>Completed {project.stats.year}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-3 h-3" />
                    <span>{project.scope}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
