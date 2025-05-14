"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner"; 
import { useRouter } from "next/navigation";
import { logOutAction } from "@/actions/users";
function LogOutButton() {
 // const { toast } = useToast();
const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);

   const { errorMessage } = await logOutAction();

    if (!errorMessage) {
      router.push(`/?toastType=logOut`);
    } else {
      toast.error(errorMessage);
    }

    setLoading(false);
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogOut}
      disabled={loading}
      className="w-24"
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogOutButton;

// "use client";

// import { Loader2 } from "lucide-react";
// import { Button } from "./ui/button";
// import { useState } from "react";
// import { toast } from "sonner"; // ⬅️ use this directly
// import { useRouter } from "next/navigation";
// // import { logOutAction } from "@/actions/users";

// function LogOutButton() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   const handleLogOut = async () => {
//     setLoading(true);

//     const  errorMessage  = "error logging out ";

//     if (!errorMessage) {
//       router.push(`/?toastType=logOut`);
//     } else {
//       toast.error(errorMessage); // simple error toast
//       // OR if you want title/description style:
//       // toast("Error", { description: errorMessage });
//     }

//     setLoading(false);
//   };

//   return (
//     <Button
//       variant="outline"
//       onClick={handleLogOut}
//       disabled={loading}
//       className="w-24"
//     >
//       {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
//     </Button>
//   );
// }

// export default LogOutButton;
