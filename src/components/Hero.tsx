import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  const [username, setUsername] = useState("");
  const [searchResults, setSearchResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!username.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults({
        username: username,
        followers: "125.4K",
        following: "892",
        posts: "1,247",
        engagement: "4.2%",
        avgLikes: "3,820",
        avgComments: "124",
        topHashtags: ["#lifestyle", "#photography", "#travel"],
        bestPostTime: "7:00 PM"
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Unlock Your Instagram
            <br />
            <span className="gradient-instagram bg-clip-text text-transparent">Potential</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get deep insights into your Instagram performance with our advanced analytics platform. 
            Make data-driven decisions and grow your audience faster than ever.
          </p>
          
          {/* Search Section */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter Instagram username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button 
                onClick={handleSearch} 
                variant="hero"
                className="shadow-elegant"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {searchResults && (
          <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
            <Card className="shadow-card border-0 gradient-subtle">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">@{searchResults.username}</h3>
                  <p className="text-muted-foreground">Instagram Analytics Overview</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{searchResults.followers}</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                  
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{searchResults.engagement}</div>
                    <div className="text-sm text-muted-foreground">Engagement Rate</div>
                  </div>
                  
                  <div className="text-center">
                    <Heart className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{searchResults.avgLikes}</div>
                    <div className="text-sm text-muted-foreground">Avg. Likes</div>
                  </div>
                  
                  <div className="text-center">
                    <Search className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{searchResults.posts}</div>
                    <div className="text-sm text-muted-foreground">Total Posts</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-background/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Top Hashtags:</strong> {searchResults.topHashtags.join(", ")} • 
                    <strong> Best Post Time:</strong> {searchResults.bestPostTime}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;