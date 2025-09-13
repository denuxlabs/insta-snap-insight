import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Target, Calendar, Hash } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Get detailed insights into your post performance, reach, impressions, and engagement metrics with our comprehensive analytics dashboard."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Insights",
      description: "Track your follower growth patterns, identify peak engagement times, and understand what content resonates most with your audience."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Audience Intelligence",
      description: "Discover who your followers are, their demographics, interests, and behaviors to create more targeted and effective content."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Instagram Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock the full potential of your Instagram presence with our comprehensive suite of analytics tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-spring group">
              <CardHeader>
                <div className="gradient-instagram p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-spring">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;