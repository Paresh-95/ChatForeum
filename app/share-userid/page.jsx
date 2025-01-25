'use client'

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { QRCodeSVG } from "qrcode.react";
import { Copy, Check, QrCode } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const ShareUserIdPage = () => {
  const { user } = useUser();
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const copyAnimation = useSpring({
    scale: copied ? 1.2 : 1,
    config: { tension: 300, friction: 10 },
  });

  const qrAnimation = useSpring({
    opacity: showQR ? 1 : 0,
    transform: showQR ? "translateY(0%)" : "translateY(-20%)",
  });

  const handleCopy = () => {
    if (user) {
      navigator.clipboard.writeText(user.id)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => alert("Failed to copy userId"));
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <p className="text-center text-lg">Please log in to view your userId</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <Card className="w-full max-w-md">
        <CardContent className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center">Share Your User ID for One-to-One Chat</h1>
          
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Show QR Code</p>
            <Switch
              checked={showQR}
              onCheckedChange={setShowQR}
            />
          </div>

          <animated.div style={qrAnimation} className="flex justify-center">
            {showQR ? (
              <QRCodeSVG value={user.id} size={200} />
            ) : (
              <p className="text-center">
                Your unique <strong>userId</strong> is: <br />
                <code className="text-lg bg-gray-100 p-2 rounded">{user.id}</code>
              </p>
            )}
          </animated.div>

          <animated.div style={copyAnimation}>
            <Button
              onClick={handleCopy}
              className="w-full"
              disabled={copied}
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" /> Copy User ID
                </>
              )}
            </Button>
          </animated.div>

          <p className="text-sm text-center text-gray-600">
            Share your <strong>userId</strong> or QR code with others to start a one-to-one chat.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShareUserIdPage;
