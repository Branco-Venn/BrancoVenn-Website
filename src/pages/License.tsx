import React, { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { Shield, FileText, Code, ExternalLink, Search } from "lucide-react";

interface OpenSourceLicense {
  name: string;
  version: string;
  licenseType: string;
  url: string;
  description: string;
  text: string;
}

export const License: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"eula" | "oss">("eula");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedLicense, setExpandedLicense] = useState<string | null>(null);

  const ossLicenses: OpenSourceLicense[] = [
    {
      name: "React",
      version: "^19.2.6",
      licenseType: "MIT",
      url: "https://github.com/facebook/react",
      description: "A JavaScript library for building user interfaces.",
      text: `MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    },
    {
      name: "React Native",
      version: "0.74.x",
      licenseType: "MIT",
      url: "https://github.com/facebook/react-native",
      description: "A framework for building native applications using React.",
      text: `MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    },
    {
      name: "Expo",
      version: "51.0.x",
      licenseType: "MIT",
      url: "https://github.com/expo/expo",
      description: "An open-source platform for making universal native apps with React.",
      text: `MIT License

Copyright (c) 2015-present 650 Industries, Inc. (Levy & Associates)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    },
    {
      name: "Framer Motion",
      version: "^12.40.0",
      licenseType: "MIT",
      url: "https://github.com/framer/motion",
      description: "A production-ready motion library for React.",
      text: `MIT License

Copyright (c) 2018 Framer B.V.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    },
    {
      name: "Tailwind CSS",
      version: "^4.3.0",
      licenseType: "MIT",
      url: "https://github.com/tailwindlabs/tailwindcss",
      description: "A utility-first CSS framework for rapid UI development.",
      text: `MIT License

Copyright (c) Tailwind Labs, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    },
    {
      name: "Lucide React",
      version: "^1.16.0",
      licenseType: "ISC",
      url: "https://github.com/lucide-awesome/lucide",
      description: "Beautiful & consistent icon toolkit for React applications.",
      text: `ISC License

Copyright (c) 2020, Lucide Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARDARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
    },
    {
      name: "GSAP (GreenSock Animation Platform)",
      version: "^3.15.0",
      licenseType: "GreenSock License",
      url: "https://greensock.com/standard-license/",
      description: "Ultra high-performance professional-grade HTML5 animation library.",
      text: `GreenSock No-Charge License Agreement

GSAP is free to use in websites, apps, and digital products, except when you charge multiple users to use the product (commercial subscription models).

Under the standard GreenSock license:
- You can use the software for free in non-commercial or standard advertising projects.
- Reverse engineering or redistributing modified versions of the library files is prohibited.
- For products that require paid access, you must obtain a GreenSock "Business Green" membership.

Please refer to the official GreenSock licensing guidelines at:
https://greensock.com/licensing/`
    },
    {
      name: "Supabase JS client",
      version: "^2.x.x",
      licenseType: "MIT",
      url: "https://github.com/supabase/supabase-js",
      description: "Isomorphic JavaScript client for Supabase database sync.",
      text: `MIT License

Copyright (c) 2020 Supabase

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    }
  ];

  const filteredOSS = ossLicenses.filter(
    (lib) =>
      lib.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lib.licenseType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="bg-black min-h-screen pt-32 pb-20 w-full relative z-10 flex items-center justify-center">
        <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-10 flex flex-col items-center">
          
          {/* Header */}
          <div className="w-full text-center max-w-2xl mb-12">
            <h1 className="text-4xl sm:text-5xl font-light text-white mb-4 tracking-tight uppercase">
              Licenses
            </h1>
            <p className="text-white/50 text-sm sm:text-base font-light leading-relaxed">
              Review Sim Gamepad's End-User License Agreement (EULA) and the open-source software licenses powering our applications.
            </p>
          </div>

          {/* Premium Glassmorphic Tab Container */}
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-full mb-12 select-none">
            <button
              onClick={() => setActiveTab("eula")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === "eula"
                  ? "bg-white text-black shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Shield className="w-4 h-4" />
              Software License (EULA)
            </button>
            <button
              onClick={() => setActiveTab("oss")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === "oss"
                  ? "bg-white text-black shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Code className="w-4 h-4" />
              Open Source Licenses
            </button>
          </div>

          {/* Content Area */}
          <div className="w-full max-w-3xl">
            {activeTab === "eula" ? (
              <div className="space-y-8 text-white/70 font-light leading-[1.8] text-sm sm:text-base">
                <div className="liquid-glass rounded-3xl border border-white/5 p-8 sm:p-10 bg-card/20 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-light text-white uppercase tracking-tight">
                      Sim Gamepad EULA
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-medium mb-2">1. License Grant</h3>
                      <p>
                        Subject to the terms of this Agreement and your purchase of a valid activation license key, Sim Gamepad grants you a personal, non-exclusive, non-transferable, revocable license to install and run the Service (both mobile and desktop companions) on compatible personal devices solely for your private, non-commercial entertainment use.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-white font-medium mb-2">2. Activation Keys & Authentication</h3>
                      <p>
                        A valid activation license key may be required to access premium layouts, sync features, and full telemetry modules. Each license key is cryptographically tied to your registered user account (managed securely via Supabase Auth) and is subject to device activation limit thresholds to prevent piracy and abuse. Sharing, redistributing, or publishing activation keys is strictly prohibited.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-white font-medium mb-2">3. Prohibited Uses</h3>
                      <p>
                        Under this license, you agree not to:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1.5">
                        <li>Decompile, reverse engineer, disassemble, or derive the source code of the mobile or desktop clients.</li>
                        <li>Sublicense, lease, rent, redistribute, or commercially host the Sim Gamepad software.</li>
                        <li>Modify, patch, or bypass license activation checks or telemetry parsing mechanisms.</li>
                        <li>Use automated scripts or network request tools to simulate device connections to manipulate user sync tables.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-white font-medium mb-2">4. Support & Telemetry Connectivity</h3>
                      <p>
                        Sim Gamepad provides technical support for software installation, device pairing, and configuration issues via support@brancovenn.com. Because local Wi-Fi UDP broadcasting can be affected by physical router limits and channel congestion, we do not warrant that telemetry transmission will be entirely lag-free or error-free under all wireless network configurations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-white font-medium mb-2">5. Updates & Modification</h3>
                      <p>
                        We reserve the right to deploy updates, patches, and feature upgrades to the mobile application and desktop server companion. These updates are provided automatically to maintain compatibility with updated simulator games and OS updates, and may modify or remove existing dashboard components.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/40">
                      <span>Sim Gamepad version 1.0.0 (Release)</span>
                      <span>Owner: Branco Venn</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Search Bar */}
                <div className="relative w-full max-w-md mx-auto mb-8">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search libraries or licenses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-white/20 rounded-full pl-11 pr-6 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300"
                  />
                </div>

                {/* Licenses List */}
                <div className="space-y-4">
                  {filteredOSS.length > 0 ? (
                    filteredOSS.map((lib) => {
                      const isExpanded = expandedLicense === lib.name;
                      return (
                        <div
                          key={lib.name}
                          className="liquid-glass rounded-2xl border border-white/5 bg-card/10 backdrop-blur-xl hover:border-white/10 transition-all duration-300 overflow-hidden"
                        >
                          {/* Card Header (Click to Toggle) */}
                          <div
                            onClick={() => setExpandedLicense(isExpanded ? null : lib.name)}
                            className="p-6 flex items-center justify-between cursor-pointer select-none"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-3">
                                <span className="font-semibold text-white text-base">{lib.name}</span>
                                <span className="text-xs text-white/40 font-mono">{lib.version}</span>
                              </div>
                              <p className="text-xs text-white/50 font-light max-w-xl">{lib.description}</p>
                            </div>
                            <div className="flex items-center gap-4 shrink-0">
                              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80">
                                {lib.licenseType}
                              </span>
                              <a
                                href={lib.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-white/40 hover:text-white transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </div>
                          </div>

                          {/* Expanded License text */}
                          {isExpanded && (
                            <div className="border-t border-white/5 bg-black/40 p-6">
                              <pre className="text-xs font-mono text-white/60 leading-relaxed overflow-x-auto whitespace-pre-wrap select-text max-h-[300px] overflow-y-auto custom-scrollbar">
                                {lib.text}
                              </pre>
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-12 text-white/30 font-light">
                      No licenses match your search query.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
