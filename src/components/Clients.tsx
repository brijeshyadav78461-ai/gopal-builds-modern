import { Card, CardContent } from "@/components/ui/card";

const Clients = () => {
  const clients = [
    { name: "Government of India", category: "Government" },
    { name: "State PWD Department", category: "Government" },
    { name: "Municipal Corporation", category: "Government" },
    { name: "Tata Group", category: "Corporate" },
    { name: "Reliance Industries", category: "Corporate" },
    { name: "Larsen & Toubro", category: "Corporate" },
    { name: "Birla Corporation", category: "Corporate" },
    { name: "Mahindra Group", category: "Corporate" },
    { name: "DLF Limited", category: "Real Estate" },
    { name: "Prestige Group", category: "Real Estate" },
    { name: "Godrej Properties", category: "Real Estate" },
    { name: "Oberoi Realty", category: "Real Estate" },
  ];

  return (
    <section id="clients" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-lg mb-2">TRUSTED BY THE BEST</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="heading-gradient">Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proud to serve leading organizations across government and private sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <Card key={index} className="border-border card-hover group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <span className="text-2xl font-bold text-white">
                    {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                  {client.name}
                </h3>
                <p className="text-sm text-muted-foreground">{client.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            And many more satisfied clients across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
