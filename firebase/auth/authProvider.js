import { createContext, useContext, useState, useEffect } from "react";
import {auth} from "../../firebase";
import Auth from "../../firebase";
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  
} from "firebase/auth";

const AuthUserContext = createContext({
  authUser: null,
  isLoading: true,
});

// const auth 

export default function useFirebaseAuth() {


  const [authUser, setAuthUser] = useState();
  const [isLoading, setIsLoading] = useState();

  const authState = async (user) => {
    setIsLoading(true);
    if (user) {
      setAuthUser(user);
    } else {
      setAuthUser(null);
    }
    setIsLoading(false);
  };

  const unsubscribe = () => {
    onAuthStateChanged(auth, authState);
  };

  useEffect(() => {
    unsubscribe;
    // const unsubscribe = onAuthStateChanged(auth, authStateChanged);

    return () => {
      unsubscribe;
    };
  }, []);

  const handleSignOut = async () => {
    await signOut()
      .then(() => {
        alert("Successfully Logout");
        router.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const handleSignIn = async (email, password) => {
    alert(email, password)
    setIsLoading(true);
    await signInWithEmailAndPassword(Auth, "email", "password")
      .then((userCredential) => {
        alert("Success");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("ERROR : " + errorMessage);
      });
    setIsLoading(false);
  };

  const handleForgetPassword = async (email) => {
    setIsLoading(true);
    if (!email) {
      alert("Enter Your Mail Id");
      setIsLoading(false);
      return;
    }

    await sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Check You Mail : " + email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
    setIsLoading(false);
  };

  const handleSignup = async ( email, password, name, mobile) => {
    setIsLoading(true);
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        // update profile details
        await updateProfile(user, {
          displayName: name,
          phoneNumber: "+91" + mobile,
        })
          .then(() => {})
          .catch((error) => {
            alert(error.message);
          });
        alert("Success");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert("ERROR : " + errorMessage);
      });
    setIsLoading(false);
  };

  return {
    authUser,
    isLoading,
    handleSignOut,
    handleSignIn,
    handleForgetPassword,
    sendPasswordResetEmail,
    handleSignup,
  };
}

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}

export const useAuth = () => useContext(AuthUserContext);
