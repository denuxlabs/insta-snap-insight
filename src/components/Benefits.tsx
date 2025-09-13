import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Briefcase, Megaphone } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Content Creators",
      description: "Optimize your posting schedule, understand your audience better, and create content that drives engagement. Track which posts perform best and replicate success.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Social Media Managers", 
      description: "Manage multiple accounts efficiently with comprehensive reporting tools. Provide clients with detailed insights and prove ROI with actionable data.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Businesses",
      description: "Drive brand awareness and increase conversions with data-driven strategies. Monitor competitor performance and identify market opportunities.",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a creator, manager, or business owner, our platform adapts to your unique needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-spring group overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${benefit.gradient}`} />
              <CardHeader>
                <div className={`bg-gradient-to-r ${benefit.gradient} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-spring`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;