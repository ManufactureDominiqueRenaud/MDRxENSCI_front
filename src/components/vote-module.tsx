"use client";

import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import DraggableZoneComponent from "./draggable-zone-vote";
import { cn } from "@/lib/utils";
import {
  LucideCheck,
  LucideChevronsLeft,
  LucideChevronsRight,
  LucideInfo,
  LucideLoader,
} from "lucide-react";
import { useIsPinnedVoteModule } from "@/store/use-pinned-vote-module";
import { useSelectedProjectsToVote } from "@/store/use-selected-projects-to-vote";
import { useAtom } from "jotai";
import {
  useIsVoteWaitingCode,
  useVoteRequestEmail,
} from "@/store/use-isvote-waiting-code";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./ui/input-otp";
import { toast, useToast } from "@/hooks/use-toast";

function VoteModule() {
  const { locale } = useParams();
  const [isPinned, setIsPinned] = useIsPinnedVoteModule();
  const [items, setItems] = useAtom(useSelectedProjectsToVote);
  const [email, setEmail] = useState("");
  const [sendingVote, setSendingVote] = useState(false);
  const [isVoteWaiting, setIsVoteWaiting] = useIsVoteWaitingCode();
  const [emailWaiting, setEmailWaiting] = useVoteRequestEmail();
  const [validationCode, setValidationCode] = useState<string>("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const [isVoteFinished, setIsVoteFinished] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCooldown > 0) {
      timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  if (items.length === 0) return null;

  const handleVoteSubmit = async () => {
    setSendingVote(true);

    //Fetch API to send the vote
    const projectsSelectedSlugs = items.map((item) => item.slug);
    const projectsImages = items.map((item) => item.image);
    const voteData = {
      email: email,
      slugs: projectsSelectedSlugs,
      images: projectsImages,
    };
    console.log("Vote data:", voteData);
    await fetch(
      "https://mdr-x-ensci-backoffice.vercel.app/api/votes/createVote",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(voteData),
      }
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        if (data.data.email === email) {
          toast({
            title: locale === "fr" ? "Vote envoyé !" : "Vote sent!",
            description:
              locale === "fr"
                ? "Un code de validation a été envoyé à votre adresse email."
                : "A validation code has been sent to your email address.",
            variant: "default",
          });
          setSendingVote(false);
          setEmailWaiting(email);
          setIsVoteWaiting(true);
          setResendCooldown(60);
        } else {
          toast({
            title: locale === "fr" ? "Erreur" : "Error",
            description:
              locale === "fr"
                ? "Une erreur s'est produite lors de l'envoi du vote."
                : "An error occurred while sending the vote.",
            variant: "destructive",
          });
          setSendingVote(false);
          return null;
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        toast({
          title: locale === "fr" ? "Erreur" : "Error",
          description:
            locale === "fr"
              ? "Une erreur s'est produite lors de l'envoi du vote."
              : "An error occurred while sending the vote.",
          variant: "destructive",
        });
        setSendingVote(false);
        return;
      });
  };

  const handleOTPCodeSubmit = async () => {
    setSendingVote(true);

    const confirmOTPData = {
      email: emailWaiting,
      code: validationCode,
    };
    console.log("Confirm OTP data:", confirmOTPData);
    await fetch(
      "https://mdr-x-ensci-backoffice.vercel.app/api/votes/confirmVote",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(confirmOTPData),
      }
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        if (data.message === "Vote confirmé avec succès.") {
          setIsVoteWaiting(false);
          setEmailWaiting(null);
          setResendCooldown(0);
          setIsVoteFinished(true);
          setSendingVote(false);
          setItems([]);
          setValidationCode("");
          toast({
            title: locale === "fr" ? "Vote validé !" : "Vote validated!",
            description:
              locale === "fr"
                ? "Merci de votre participation."
                : "Thank you for your participation.",
            variant: "default",
          });
        } else {
          toast({
            title: locale === "fr" ? "Erreur" : "Error",
            description: locale === "fr" ? data.error : "An error occured.",
            variant: "destructive",
          });
          setSendingVote(false);

        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        toast({
          title: locale === "fr" ? "Erreur" : "Error",
          description:
            locale === "fr"
              ? "Une erreur s'est produite lors de la validation du vote."
              : "An error occurred while validating the vote.",
          variant: "destructive",
        });
        setSendingVote(false);

      });
  };

  const handleResetVoteSubmit = () => {
    setItems([]);
    setEmailWaiting(null);
    setIsVoteWaiting(false);
    setEmail("");
    setResendCooldown(0);
  };

  const handleResendCode = () => {
    if (resendCooldown === 0) {
      setResendCooldown(60);
    }
  };

  if (isVoteFinished) {
    return (
      <div className="fixed top-20 right-[5svw] lg:right-6 z-[100] bg-white text-[#253031] border border-[#253031]/20 rounded-md w-[90svw] lg:w-[400px] p-4">
        <LucideCheck className="size-16 text-green-500 mx-auto" />
        <h2 className="text-lg font-bold text-center">
          {locale === "fr" ? "Vote validé !" : "Vote validated!"}
        </h2>
        <p className="text-sm text-center mt-2">
          {locale === "fr"
            ? "Merci de votre participation."
            : "Thank you for your participation."}
        </p>
      </div>
    );
  }

  if (isVoteWaiting)
    return (
      <>
        <div
          className={cn(
            isPinned
              ? "fixed top-20 right-[5svw] lg:right-6"
              : "fixed top-20 -right-[100%]",
            "z-[100] bg-white text-[#253031] border border-[#253031]/20 rounded-md w-[90svw] lg:w-[400px] transition-all duration-500 ease-in-out"
          )}
        >
          <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-lg font-bold">
              {locale === "fr" ? "Validez votre vote" : "Validate your vote"}
            </h2>
            <LucideChevronsRight
              className="cursor-pointer size-6 absolute right-4 top-4"
              onClick={() => setIsPinned(!isPinned)}
            />
            <p className="text-sm text-center border rounded-md p-2 mt-2 bg-[#253031]/5 text-[#253031]/60">
              {locale === "fr"
                ? "Pour valider votre vote, entrez le code de validation envoyé par email à :"
                : "To validate your vote, enter the validation code sent by email to :"}
              <span>
                <strong>{" " + emailWaiting}</strong>
              </span>
            </p>
          </div>
          <div className="w-2/3 h-px mx-auto bg-[#253031]/20 rounded-full mb-4" />
          <div className="w-full flex flex-col items-center justify-center px-4 pb-4">
            <InputOTP
              maxLength={6}
              value={validationCode}
              onChange={(value) => setValidationCode(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="flex flex-col items-center justify-center px-4 pb-4">
            <div className="p-1 w-full flex flex-col items-center gap-2 mt-2">
              <Button
                variant={"default"}
                size={"lg"}
                className="hover:cursor-pointer w-full bg-[#253031] hover:bg-[#253031]/90"
                disabled={
                  validationCode.length !== 6 || isVoteFinished || sendingVote
                }
                onClick={handleOTPCodeSubmit}
              >
                {locale === "fr" ? "Valider mon vote" : "Validate my vote"}
                {sendingVote && (
                  <LucideLoader className="animate-spin mr-0.5" />
                )}
              </Button>
              <Button
                variant={"outline"}
                size={"lg"}
                className="hover:cursor-pointer w-full"
                onClick={handleResendCode}
                disabled={resendCooldown > 0}
              >
                {resendCooldown > 0
                  ? locale === "fr"
                    ? `Renvoyer le code (${resendCooldown}s)`
                    : `Resend code (${resendCooldown}s)`
                  : locale === "fr"
                  ? "Renvoyer le code"
                  : "Resend code"}
              </Button>
              {resendCooldown > 0 && (
                <span className="text-xs text-gray-500">
                  {locale === "fr"
                    ? "Veuillez patienter avant de renvoyer le code."
                    : "Please wait before resending the code."}
                </span>
              )}
              <Button
                variant={"link"}
                className="hover:cursor-pointer"
                onClick={handleResetVoteSubmit}
              >
                {locale === "fr" ? "Réinitialiser le vote" : "Reset vote"}
              </Button>
            </div>
          </div>
        </div>
        <div
          className={cn(
            isPinned ? "fixed top-20 -right-[100%]" : "fixed top-20 right-0",
            "flex flex-col gap-4 p-2 hover:pr-6 z-[60] bg-[#ffffff] text-[#253031] border border-[#253031]/20 rounded-l-md transition-all duration-500 ease-in-out cursor-pointer"
          )}
          onClick={() => setIsPinned(!isPinned)}
        >
          <LucideChevronsLeft className="cursor-pointer size-4" />
          <p className="[writing-mode:vertical-lr] text-nowrap">
            {locale === "fr" ? "Votre vote" : "Your vote"}
          </p>
          <LucideChevronsLeft className="cursor-pointer size-4" />
        </div>
      </>
    );

  return (
    <>
      <div
        className={cn(
          isPinned
            ? "fixed top-20 right-[5svw] lg:right-6"
            : "fixed top-20 -right-[100%]",
          "z-[100] bg-white text-[#253031] border border-[#253031]/20 rounded-md w-[90svw] lg:w-[400px] transition-all duration-500 ease-in-out"
        )}
      >
        <div className="flex items-center justify-center p-4">
          <h2 className="text-lg font-bold">
            {locale === "fr" ? "Votre sélection" : "Your selection"}
          </h2>
          <LucideChevronsRight
            className="cursor-pointer size-6 absolute right-4"
            onClick={() => setIsPinned(!isPinned)}
          />
        </div>
        <div className="w-2/3 h-px mx-auto bg-[#253031]/20 rounded-full mb-4" />
        <div className="flex flex-col items-center justify-center px-4 pb-4">
          <DraggableZoneComponent locale={locale} />
          <div className="p-1 w-full flex flex-col items-center gap-2 mt-2">
            {items.length > 0 && items.length < 3 && (
              <Card className="w-full border border-[#253031]/20 bg-[#253031]/5 text-[#253031]/60 cursor-default transition-all duration-200 ease-in-out">
                <CardContent className="p-2 px-4 flex gap-1 items-center justify-center text-sm">
                  <LucideInfo className="size-3 text-gray-500" />
                  {locale === "fr"
                    ? `Vous pouvez sélectionner ${3 - items.length} autre${
                        3 - items.length === 1 ? "" : "s"
                      } projet${3 - items.length === 1 ? "" : "s"}`
                    : `You can select ${3 - items.length} other${
                        3 - items.length === 1 ? "" : "s"
                      } project${3 - items.length === 1 ? "" : "s"}`}
                </CardContent>
              </Card>
            )}
            <div className="w-2/3 h-px mx-auto bg-[#253031]/20 rounded-full my-4" />
            {items.length > 0 && (
              <div className="w-full flex flex-col justify-center mb-2 gap-2">
                <Input
                  type="email"
                  placeholder={
                    locale === "fr" ? "Entrez votre email" : "Enter your email"
                  }
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
                <Button
                  variant={"default"}
                  size={"lg"}
                  className="w-full bg-[#253031] hover:bg-[#253031]/90"
                  disabled={email === "" || sendingVote}
                  onClick={handleVoteSubmit}
                >
                  {sendingVote && (
                    <LucideLoader className="animate-spin mr-0.5" />
                  )}
                  {sendingVote
                    ? locale === "fr"
                      ? "Envoi du vote..."
                      : "Sending vote..."
                    : locale === "fr"
                    ? "Soumettre le vote"
                    : "Submit vote"}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2 flex flex-col items-center">
                  {locale === "fr" ? (
                    <>
                      Vous recevrez un code de validation par email.{" "}
                      <span className="underline">
                        Votre email ne sera pas conservé.
                      </span>
                    </>
                  ) : (
                    <>
                      You will receive a validation code by email.{" "}
                      <span className="underline">
                        Your email will not be stored.
                      </span>
                    </>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={cn(
          isPinned ? "fixed top-20 -right-[100%]" : "fixed top-20 right-0",
          "flex flex-col gap-4 p-2 hover:pr-6 z-[60] bg-[#ffffff] text-[#253031] border border-[#253031]/20 rounded-l-md transition-all duration-500 ease-in-out cursor-pointer"
        )}
        onClick={() => setIsPinned(!isPinned)}
      >
        <LucideChevronsLeft className="cursor-pointer size-4" />
        <p className="[writing-mode:vertical-lr] text-nowrap">
          {locale === "fr" ? "Votre sélection" : "Your selection"}
        </p>
        <LucideChevronsLeft className="cursor-pointer size-4" />
      </div>
    </>
  );
}

export default VoteModule;
