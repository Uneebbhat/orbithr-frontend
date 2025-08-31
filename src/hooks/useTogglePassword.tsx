"use client";

import { useState } from "react";

interface UseTogglePassword {
  togglePassword: boolean;
  handleTogglePassword: () => void;
}

const useTogglePassword = (): UseTogglePassword => {
  const [togglePassword, setTogglePassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  return { togglePassword, handleTogglePassword };
};

export default useTogglePassword;
