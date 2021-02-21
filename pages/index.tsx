import HomePage from "./HomePage";
import { MenuProvider } from "../ContextAPI/menuContext";

export default function Home() {
  return (
    <MenuProvider>
      <HomePage />
    </MenuProvider>
  );
}
