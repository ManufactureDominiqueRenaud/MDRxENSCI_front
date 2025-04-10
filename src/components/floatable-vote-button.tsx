"use client"

import React, { useEffect, useRef, useState } from 'react'
import VoteForProjectButton from './vote-for-project-button'

function FloatableVoteButton({
    projectData,
    locale
}: {
    projectData: {
        data: {
            id: number;
            attributes: {
                voteForProjectCTA: string;
                projectTitle: string;
            };
        }[];
    };
    locale: string;
}) {

    const targetRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          setIsVisible(entries[0].isIntersecting);
        },
        { threshold: 0.1 } // Déclenchement à 10% de visibilité
      );
  
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      return () => {
        if (targetRef.current) observer.unobserve(targetRef.current);
      };
    }, []);

  return (
    <div className="fixed bottom-8 right-1/2 translate-x-1/2 z-50">
        <VoteForProjectButton
          label={projectData.data[0].attributes.voteForProjectCTA}
          projectId={projectData.data[0].id}
          projectName={projectData.data[0].attributes.projectTitle}
          locale={locale}
        />
      </div>
  )
}

export default FloatableVoteButton