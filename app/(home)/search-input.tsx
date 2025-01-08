"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useSearchParams } from "@/hooks/use-search-params";

const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const [search, setSearch] = useSearchParams("search");
  const inputRef = useRef<HTMLInputElement>(null);
  const hangleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  console.log({ search });
  const handleClear = () => {
    setValue("");
    inputRef?.current?.blur();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(value);
    inputRef?.current?.blur();
  };
  return (
    <div className="flex-1 flex items-center justify-center ">
      <form onSubmit={handleSubmit} className="w-full max-w-[720px] relative">
        <Input
          ref={inputRef}
          value={value}
          onChange={hangleChange}
          placeholder="Search.."
          className="md:text-base placeholder:text-neutral-800 px-14 w-full border-none focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3px_1px_rgba(65, 69,73,.15)] bg-[#F0F4F8]  rounded-full h-[48px] focus-visible:ring-0 focus:bg-white"
        />{" "}
        <Button
          type="submit"
          variant={"ghost"}
          size={"icon"}
          className="absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
        >
          <SearchIcon />
        </Button>
        {value && (
          <Button
            onClick={handleClear}
            type="button"
            variant={"ghost"}
            size={"icon"}
            className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
          >
            <X />
          </Button>
        )}
      </form>
    </div>
  );
};

export default SearchInput;
