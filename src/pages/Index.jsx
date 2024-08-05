import { useState, useEffect } from 'react';
import { Paw, Heart, Info, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const DogBreeds = () => {
  const breeds = [
    { name: 'Labrador Retriever', description: 'Friendly and outgoing, great with families.' },
    { name: 'German Shepherd', description: 'Intelligent and versatile working dog.' },
    { name: 'Golden Retriever', description: 'Gentle, affectionate, and great with children.' },
    { name: 'French Bulldog', description: 'Playful, adaptable, and charming companion.' },
    { name: 'Bulldog', description: 'Docile, willful, and friendly.' },
    { name: 'Poodle', description: 'Highly intelligent and elegant.' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {breeds.map((breed, index) => (
        <motion.div
          key={breed.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>{breed.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <img 
                src={`https://source.unsplash.com/400x300/?${breed.name.toLowerCase().replace(' ', '-')}`} 
                alt={breed.name} 
                className="w-full h-48 object-cover rounded-md mb-4" 
              />
              <CardDescription>{breed.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

const FunFacts = () => {
  const facts = [
    "Dogs have a sense of time and can tell how long you've been gone.",
    "A dog's nose print is unique, much like a human's fingerprint.",
    "Dalmatians are born completely white and develop their spots as they grow older.",
    "The Basenji is the only breed of dog that can't bark, but they can yodel!",
    "A dog's normal body temperature is between 101 to 102.5 degrees Fahrenheit."
  ];

  return (
    <motion.ul 
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {facts.map((fact, index) => (
        <motion.li 
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start space-x-2"
        >
          <Paw className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
          <span>{fact}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

const CareTips = () => {
  const tips = [
    { title: "Balanced Diet", description: "Provide a balanced diet appropriate for your dog's age, size, and activity level." },
    { title: "Regular Exercise", description: "Ensure your dog gets regular exercise through walks, playtime, and activities." },
    { title: "Veterinary Check-ups", description: "Schedule regular check-ups with a veterinarian for vaccinations and health screenings." },
    { title: "Grooming", description: "Groom your dog regularly, including brushing their coat and teeth." },
    { title: "Mental Stimulation", description: "Offer mental stimulation through training, puzzle toys, and interactive games." }
  ];

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="text-2xl font-semibold text-center mb-6">Essential Dog Care Tips</h3>
      {tips.map((tip, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{tip.description}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("breeds");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Paw className="h-16 w-16 text-primary" />
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 p-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-8 text-center text-primary"
        >
          All About Dogs
        </motion.h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="breeds"><Paw className="mr-2 h-4 w-4" /> Dog Breeds</TabsTrigger>
            <TabsTrigger value="facts"><Info className="mr-2 h-4 w-4" /> Fun Facts</TabsTrigger>
            <TabsTrigger value="care"><Heart className="mr-2 h-4 w-4" /> Care Tips</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="breeds" className="mt-6">
                <DogBreeds />
              </TabsContent>
              <TabsContent value="facts" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Fun Dog Facts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FunFacts />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="care" className="mt-6">
                <CareTips />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Index;
