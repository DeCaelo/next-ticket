import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Input />
      <Button variant="default" className="cursor-pointer">
        click
      </Button>
    </div>
  );
};

export default HomePage;
