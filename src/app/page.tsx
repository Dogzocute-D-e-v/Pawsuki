'use client';
import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { GitHub, MessageCircle, Radio } from 'react-feather';
import * as Avatar from '@radix-ui/react-avatar';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Separator from '@radix-ui/react-separator';
import Snowfall from 'react-snowfall';
import StartPrompt from './components/StartPrompt';
import MusicPlayer from './components/MusicPlayer';
import './styles/StartPrompt.css';
import './styles/musicPlayer.css';

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio once after component mounts
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio('/audio/song.mp3');
      audio.volume = 0.5;
      audioRef.current = audio;
    }
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error('Audio play failed:', err);
      });
    }
  };

  return (
    <>
      {!isStarted && (
        <StartPrompt
          onStart={() => setIsStarted(true)}
          playAudio={playAudio}
        />
      )}

      {isStarted && (
        <div
          className="min-h-screen flex items-center justify-center text-white relative"
          style={{
            backgroundColor: '#000000',
            backgroundImage: 'url(http://www.transparenttextures.com/patterns/graphy-dark.png)',
          }}
        >
          <Snowfall />
          <Head>
            <title>Pawsuki's Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
              rel="stylesheet"
            />
          </Head>

          <div className="relative w-full max-w-md text-center bg-[rgba(0,0,0,0.4)] rounded-3xl p-8 shadow-2xl font-['Poppins']">
            <Image
              src="https://i.imgur.com/RJyBoSU.gif"
              alt="Banner Image"
              width={600}
              height={200}
              className="rounded-t-3xl object-cover h-48 w-full"
            />
            <div className="flex justify-center -mt-16">
              <Avatar.Root className="w-28 h-28 border-4 border-gray-800 rounded-full overflow-hidden shadow-xl">
                <Avatar.Image
                  src="/imgs/pfp.png"
                  alt="Pawsuki's Profile Picture"
                  className="w-full h-full object-cover"
                />
              </Avatar.Root>
            </div>
            <div className="text-center mt-6">
              <h1 className="text-5xl font-extrabold font-[Poppins] tracking-wide">Pawsuki</h1>
              <p className="text-md font-light mt-3 opacity-90">🎄 OOooo a tree :p</p>
              <div className="flex justify-center space-x-4 mt-6">
                <span className="bg-black text-sm px-6 py-2 rounded-full font-medium shadow-md hover:bg-gray-800 transition">
                  NodeJs
                </span>
                <span className="bg-black text-sm px-6 py-2 rounded-full font-medium shadow-md hover:bg-gray-800 transition">
                  NextJs
                </span>
                <span className="bg-black text-sm px-6 py-2 rounded-full font-medium shadow-md hover:bg-gray-800 transition">
                  DiscordJs
                </span>
              </div>
            </div>

            <Separator.Root className="bg-gray-700 h-px my-12" />

            <div className="flex justify-center space-x-12 mt-6">
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <a
                      href="https://discord.gg/e46k8hyw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle
                        className="text-4xl text-[#A855F7] transition-transform duration-300 transform hover:scale-110"
                        style={{ textShadow: '0 0 30px #A855F7' }}
                      />
                    </a>
                  </Tooltip.Trigger>
                  <Tooltip.Content
                    side="top"
                    className="bg-gray-800 px-4 py-2 rounded-lg text-sm shadow-xl"
                  >
                    Discord
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>

              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <a
                      href="https://open.spotify.com/user/31nqos6sbngukvwynzaufeiaot5y"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Radio
                        className="text-4xl text-[#A855F7] transition-transform duration-300 transform hover:scale-110"
                        style={{ textShadow: '0 0 30px #A855F7' }}
                      />
                    </a>
                  </Tooltip.Trigger>
                  <Tooltip.Content
                    side="top"
                    className="bg-gray-800 px-4 py-2 rounded-lg text-sm shadow-xl"
                  >
                    Spotify
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>

              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <a
                      href="https://github.com/Dogzocute-D-e-v"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub
                        className="text-4xl text-[#A855F7] transition-transform duration-300 transform hover:scale-110"
                        style={{ textShadow: '0 0 30px #A855F7' }}
                      />
                    </a>
                  </Tooltip.Trigger>
                  <Tooltip.Content
                    side="top"
                    className="bg-gray-800 px-4 py-2 rounded-lg text-sm shadow-xl"
                  >
                    GitHub
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>
          </div>

          <MusicPlayer audioRef={audioRef} songName="☄ NightVision by 🖤 Lannarie ✨" />
        </div>
      )}
    </>
  );
}