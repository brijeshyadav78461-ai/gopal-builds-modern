import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      content: "Gopal Builders transformed our dream home into reality. Their attention to detail and professionalism exceeded our expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      content: "Our commercial project was completed on time and within budget. The team's expertise and dedication made the entire process smooth and stress-free.",
      rating: 5,
    },
    {
      name: "Anil Verma",
      role: "Property Developer",
      content: "Working with Gopal Builders has been a pleasure. Their quality of work and commitment to excellence is unmatched in the industry.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-lg mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="heading-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients about their experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-hover border-border bg-card relative overflow-hidden"
            >
              <CardContent className="pt-8 pb-6">
                <Quote className="w-12 h-12 text-accent/20 mb-4" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
