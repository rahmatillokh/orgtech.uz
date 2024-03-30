import { Heart, Menu, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

import { useMediaQuery } from "usehooks-ts";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { ModeToggle } from "../shared/moddle-toggle";

function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="py-5 shadow-md dark:shadow-slate-900 drop-shadow-md">
      <div className="container xl flex flex-row items-center justify-between">
        <div className="navbar__logo">
          <Link to={"/"} className="font-sans text-2xl">
            Orgtech.uz
          </Link>
        </div>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"outline"}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menyular</SheetTitle>
              </SheetHeader>
              <ModeToggle />
              <div className="mt-5">
                <ul className="flex flex-col space-y-3">
                  <Button variant={"secondary"} className="w-full" asChild>
                    <Link
                      to={"/profile"}
                      className="flex flex-row gap-2 items-center "
                    >
                      <User size={"20"} />
                      <span className=" text-x">Kirish</span>
                    </Link>
                  </Button>
                  <Button asChild variant={"secondary"} className="w-full">
                    <Link
                      to={"/favorites"}
                      className="flex flex-row gap-2 items-center"
                    >
                      <Heart size={"20"} />
                      <span className=" text-x">Saralangan</span>
                    </Link>
                  </Button>
                  <Button asChild variant={"secondary"} className="w-full">
                    <Link
                      to={"/cart"}
                      className="flex flex-row gap-2 items-center"
                    >
                      <ShoppingCart size={"20"} />
                      <span className=" text-x">Savatcha</span>
                    </Link>
                  </Button>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="navbar__list">
            <ul className="list-none flex items-center flex-row gap-5">
              <li className="navbar__list-item">
                <Link
                  to={"/profile"}
                  className="flex flex-row gap-2 items-center "
                >
                  <User size={"20"} />
                  <span className=" text-x">Kirish</span>
                </Link>
              </li>
              <li className="navbar__list-item">
                <Link
                  to={"/favorites"}
                  className="flex flex-row gap-2 items-center"
                >
                  <Heart size={"20"} />
                  <span className=" text-x">Saralangan</span>
                </Link>
              </li>
              <li className="navbar__list-item">
                <Link to={"/cart"} className="flex flex-row gap-2 items-center">
                  <ShoppingCart size={"20"} />
                  <span className=" text-x">Savatcha</span>
                </Link>
              </li>
              <ModeToggle />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
