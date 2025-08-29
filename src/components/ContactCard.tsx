'use client';

import { Card, CardContent } from "./ui/card";
import { ExternalLink } from "lucide-react";

export const ContactCard = ({ info }) => {
  return (
    <Card
      key={info.title}
      className="glassmorphism border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group cursor-pointer"
      onClick={() => {
        if (info.href.startsWith("mailto:")) {
          window.location.href = info.href;
        } else {
          window.open(info.href, "_blank");
        }
      }}
    >
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div
            className={`p-3 rounded-lg bg-primary/10 ${info.color} group-hover:scale-110 transition-transform duration-300`}
          >
            {info.icon}
          </div>
          <div>
            <h4 className="font-semibold text-foreground">
              {info.title}
            </h4>
            <p className="text-muted-foreground">{info.value}</p>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300 ml-auto" />
        </div>
      </CardContent>
    </Card>
  );
};