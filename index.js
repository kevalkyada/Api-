const express = require("express");
const app = express();
const port = 3000;

function getConfig(env = "dev") {
  const origin = `webapp${env !== "prod" ? `-${env}` : ""}`; // webapp-dev, webapp-snp, webapp
  return {
    paramount: {
      id: "paramount",
      agencyNetworkName: "Paramount",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#1a3047",
          textHoverColor: "#316981",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "rgb(26, 48, 71)",
          backgroundHoverColor: "#316981",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/login/paramount/paramount_logo.png`,
          width: "250px",
          height: "50px",
          redirectionLink: "http://www.paramountexclusiveins.com/",
          // INFO: if any error occurs in rendering logo then this text will be display
          alterText: "Paramount exclusive insurance logo",
        },
        link: {
          home: "http://www.paramountexclusiveins.com/",
          registerLink: `https://${origin}.coverforce.com/registration/paramount/`,
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/login/paramount/paramount_logo.png`,
        // INFO: while adding attribute of logo at that time make sure that we can use javascript styles attribute, when we want to use that at that time please uncomment below code
        // logoStyles: {
        //   height: '100px',
        //   backgroundColor: 'red',
        // },
      },
    },
    nbs: {
      id: "nbs",
      agencyNetworkName: "NBS",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#1a51a4",
          textHoverColor: "#4191d8",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#1a51a4",
          backgroundHoverColor: "#4191d8",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/amtrust-logo.png`,
          width: "180px",
          height: "40px",
          redirectionLink: "https://nbsbrokerage.com",
          // INFO: if any error occurs in rendering logo then this text will be display
          alterText: "Nationwide Brokerage Solutions",
        },
        link: {
          home: "https://nbsbrokerage.com",
          registerLink: `https://${origin}.coverforce.com/registration/nbs/`,
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/amtrust-logo.png`,
        // INFO: while adding attribute of logo at that time make sure that we can use javascript styles attribute, when we want to use that at that time please uncomment below code
        // logoStyles: {
        //   height: '100px',
        //   backgroundColor: 'red',
        // },
      },
    },
    aiu: {
      id: "aiu",
      agencyNetworkName: "AIU",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#1A3042",
          textHoverColor: "#316981",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#1A3042",
          backgroundHoverColor: "#316981",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/login/aiu/aiu_nav_logo.png`,
          width: "160px",
          height: "70px",
          redirectionLink: "https://aiuinc.com/",
          // INFO: if any error occurs in rendering logo then this text will be display
          alterText: "Aiu exclusive insurance logo",
        },
        link: {
          home: "https://aiuinc.com/",
          registerLink: `https://${origin}.coverforce.com/registration/aiu/`,
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/login/aiu/aiu_logo.png`,
        // INFO: while adding attribute of logo at that time make sure that we can use javascript styles attribute, when we want to use that at that time please uncomment below code
        logoStyles: {
          height: "100px",
        },
      },
    },
    globalgreen: {
      id: "globalgreen",
      agencyNetworkName: "globalgreen",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#016f3b",
          textHoverColor: "#039c54",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#016f3b",
          backgroundHoverColor: "#039c54",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/login/globalGreen/global_green_logo.png`,
          width: "130px",
          height: "55px",
          redirectionLink: "https://www.ggiausa.com/",
          // INFO: if any error occurs in rendering logo then this text will be display
          alterText: "Global Green insurance agency",
        },
        link: {
          home: "https://www.ggiausa.com/",
          registerLink: `https://${origin}.coverforce.com/registration/globalgreen/`,
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/login/globalGreen/global_green_logo.png`,
        // INFO: while adding attribute of logo at that time make sure that we can use javascript styles attribute, when we want to use that at that time please uncomment below code
        // logoStyles: {
        //   height: '100px',
        //   backgroundColor: 'red',
        // },
      },
    },
    // valley: {
    //   id: 'valley_insurance',
    //   agencyNetworkName: 'Valley Insurance',
    //   navBar: {
    //     isVisible: true,
    //     navBackgroundColor: 'white',
    //     navHeight: '75px',
    //     navItem: {
    //       textColor: '#102c4e',
    //       textHoverColor: '#3653a5',
    //       fontSize: '14px',
    //       fontFamily: '"Lato", sans-serif',
    //     },
    //     button: {
    //       backgroundColor: '#102c4e',
    //       backgroundHoverColor: '#3653a5',
    //       textColor: 'white',
    //       fontWeight: '400',
    //       fontSize: '14px',
    //     },

    //     logo: {
    //       logoUrl: `https://${origin}.coverforce.com/logo/valley-logo.png`,
    //       width: '125px',
    //       height: '45px',
    //       redirectionLink: 'https://valleyinsuranceservices.com/',
    //       // INFO: if any error occurs in rendering logo then this text will be display
    //       alterText: 'Valley insurance agency',
    //     },
    //     link: {
    //       home: 'https://valleyinsuranceservices.com/',
    //     },
    //   },
    //   pageBackground: {
    //     backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
    //   },
    //   widget: {
    //     logoUrl: `https://${origin}.coverforce.com/logo/valley-logo.png`,
    //     // INFO: while adding attribute of logo at that time make sure that we can use javascript styles attribute, when we want to use that at that time please uncomment below code
    //     // logoStyles: {
    //     //   height: '100px',
    //     //   backgroundColor: 'red',
    //     // },
    //   },
    // },
    amtrust: {
      id: "amtrust",
      agencyNetworkName: "Amtrust",
      navBar: {
        isVisible: false,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#1a3047",
          textHoverColor: "#316981",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "rgb(26, 48, 71)",
          backgroundHoverColor: "#316981",
          textColor: "white",
          fontWeight: "400",
          fontSize: "20px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/login/paramount/paramount_logo.png`,
          width: "250px",
          height: "50px",
          redirectionLink: "http://www.paramountexclusiveins.com/",
          // INFO: if any error occurs in rendering logo then this text will be display
          alterText: "Paramount exclusive insurance logo",
        },
        link: {
          home: "http://www.paramountexclusiveins.com/",
          registerLink: `https://${origin}.coverforce.com/registration/paramount/`,
        },
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/login/amtrust/amtrust-logo.png`,
        // INFO: while adding attribute of logo at that time make sure that we can use javascript styles attribute, when we want to use that at that time please uncomment below code
        // logoStyles: {
        //   height: '100px',
        //   backgroundColor: 'red',
        // },
      },
    },
    iroquois: {
      id: "iroquois",
      agencyNetworkName: "Iroquois Group",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#F38B1F",
          textHoverColor: "#E0641E",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#F38B1F",
          backgroundHoverColor: "#E0641E",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/login/iroquois/iroquois_login_logo.png`,
          width: "210px",
          height: "40px",
          redirectionLink: "https://iroquoisgroup.com/",
          alterText: "Iroquois Group Logo",
        },
        link: {
          home: "https://iroquoisgroup.com/",
          registerLink: `https://${origin}.coverforce.com/registration/iroquois/`,
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/login/iroquois/iroquois_login_logo.png`,
        logoStyles: {
          width: "210px",
          height: "40px",
        },
      },
    },
    // kap: {
    //   id: 'kap',
    //   agencyNetworkName: 'Keystone Agency Partners',
    //   navBar: {
    //     isVisible: true,
    //     navBackgroundColor: 'white',
    //     navHeight: '75px',
    //     navItem: {
    //       textColor: '#624de3',
    //       textHoverColor: '#8c78f0',
    //       fontSize: '14px',
    //       fontFamily: '"Lato", sans-serif',
    //     },
    //     button: {
    //       backgroundColor: '#624de3',
    //       backgroundHoverColor: '#8c78f0',
    //       textColor: 'white',
    //       fontWeight: '400',
    //       fontSize: '14px',
    //     },

    //     logo: {
    //       logoUrl: `https://${origin}.coverforce.com/login/kap/kap_login_logo.svg`,
    //       width: '280px',
    //       height: '60px',
    //       redirectionLink: 'https://keystoneagencypartners.com/',
    //       alterText: 'Keystone Agency Partners Logo',
    //     },
    //     link: {
    //       home: 'https://keystoneagencypartners.com/',
    //       registerLink: `https://${origin}.coverforce.com/registration/kap/`,
    //     },
    //   },
    //   pageBackground: {
    //     backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
    //   },
    //   widget: {
    //     logoUrl: `https://${origin}.coverforce.com/login/kap/kap_login_logo.svg`,
    //   },
    // },
    iua: {
      id: "iua",
      agencyNetworkName: "International Underwriting Agency",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#624de3",
          textHoverColor: "#8c78f0",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#624de3",
          backgroundHoverColor: "#8c78f0",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/login/iua/iua_login_logo.svg`,
          width: "210px",
          height: "40px",
          redirectionLink: "https://www.iua.bz/",
          alterText: "International Underwriting Agency Logo",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/iua/`,
          home: "https://www.iua.bz/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/login/iua/iua_login_logo.svg`,
        logoStyles: {
          height: "55px",
        },
      },
    },
    gaig: {
      id: "gaig",
      agencyNetworkName: "Great American Insurance Company",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#00274e",
          textHoverColor: "#014f96",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#00274e",
          backgroundHoverColor: "#014f96",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/login/gaig/gaig_logo.jpg`,
          width: "100px",
          height: "40px",
          redirectionLink: "https://www.greatamericaninsurancegroup.com/",
          alterText: "Great American Insurance Company Logo",
        },
        link: {
          home: "https://www.greatamericaninsurancegroup.com/",
          registerLink: `https://${origin}.coverforce.com/registration/gaig/`,
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/login/gaig/gaig_logo.jpg`,
        logoStyles: {
          height: "60px",
        },
      },
    },
    tuscano: {
      id: "tuscano",
      agencyNetworkName: "Tuscano",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#2f5973",
          textHoverColor: "#96c1d4",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#2f5973",
          backgroundHoverColor: "#96c1d4",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/login/tuscano/tuscano_login_logo.png`,
          width: "160px",
          height: "50px",
          redirectionLink: "https://www.tuscano.com/default.aspx",
          alterText: "Tuscano Agency Logo",
        },
        link: {
          home: "https://www.tuscano.com/default.aspx",
          registerLink: `https://${origin}.coverforce.com/registration/tuscano/`,
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/login/tuscano/tuscano_login_logo.png`,
        logoStyles: {
          width: "160px",
          height: "50px",
        },
      },
    },
    // siu: {
    //   id: 'siu',
    //   agencyNetworkName: 'SIU',
    //   navBar: {
    //     isVisible: true,
    //     navBackgroundColor: 'white',
    //     navHeight: '75px',
    //     navItem: {
    //       textColor: '#ebc404',
    //       textHoverColor: '#333000',
    //       fontSize: '14px',
    //       fontFamily: '"Lato", sans-serif',
    //     },
    //     button: {
    //       backgroundColor: '#ebc404',
    //       backgroundHoverColor: '#333000',
    //       textColor: 'white',
    //       fontWeight: '400',
    //       fontSize: '14px',
    //     },

    //     logo: {
    //       logoUrl: `https://${origin}.coverforce.com/logo/siu-logo.png`,
    //       width: '200px',
    //       height: '45px',
    //       redirectionLink: 'https://site.siuins.com/',
    //       alterText: 'SIU insurance logo',
    //     },
    //     link: {
    //       home: 'https://site.siuins.com/',
    //       registerLink: `https://${origin}.coverforce.com/registration/siu/`,
    //     },
    //   },
    //   pageBackground: {
    //     backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
    //   },
    //   widget: {
    //     logoUrl: `https://${origin}.coverforce.com/logo/siu-logo.png`,
    //     logoStyles: {
    //       height: '50px',
    //     },
    //   },
    // },
    optimyl: {
      id: "optimyl",
      agencyNetworkName: "Optimyl Benefits",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#4ebc8a",
          textHoverColor: "#4077b0",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#4ebc8a",
          backgroundHoverColor: "#4077b0",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/optimyl-logo.png`,
          width: "150px",
          height: "50px",
          redirectionLink: "https://www.optimyl.com/",
          alterText: "Optimyl Benefits logo",
        },
        link: {
          home: "https://www.optimyl.com/",
          registerLink: `https://${origin}.coverforce.com/registration/optimyl/`,
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/optimyl-logo.png`,
        logoStyles: {
          height: "50px",
        },
      },
    },
    brooks: {
      id: "brooks",
      agencyNetworkName: "Brooks Insurance Agency Network",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#005994",
          textHoverColor: "#0996d5",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#005994",
          backgroundHoverColor: "#0996d5",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/brooks-logo.png`,
          width: "100px",
          height: "40px",
          redirectionLink: "https://www.brooks-ins.com/",
          alterText: "Brooks Insurance Agency Network Logo",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/brooks/`,
          home: "https://www.brooks-ins.com/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/brooks-logo.png`,
        logoStyles: {
          height: "45px",
        },
      },
    },
    pinkham: {
      id: "pinkham",
      agencyNetworkName: "BFA OF NY, INC",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#1b3047",
          textHoverColor: "#316981",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#1b3047",
          backgroundHoverColor: "#316981",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/pinkham-logo.png`,
          width: "210px",
          height: "30px",
          redirectionLink: "https://www.bfaofny.com/",
          alterText: "BFA OF NY, INC Logo",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/pinkham/`,
          home: "https://www.bfaofny.com/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/pinkham-logo.png`,
        logoStyles: {
          height: "35px",
        },
      },
    },
    empirestate: {
      id: "empirestate",
      agencyNetworkName: "Empire State Brokerage Services Network",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#2d4d9e",
          textHoverColor: "#4d67ab",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#2d4d9e",
          backgroundHoverColor: "#4d67ab",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/empirestate-logo.png`,
          width: "150px",
          height: "50px",
          redirectionLink: "https://empirebrokerage.com/",
          alterText: "Empire State Brokerage Services Network",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/empirestate/`,
          home: "https://empirebrokerage.com/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/empirestate-logo.png`,
        logoStyles: {
          height: "60px",
        },
      },
    },
    iscmga: {
      id: "iscmga",
      agencyNetworkName: "Integrated Specialty Coverages MGA Network",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#5be2e4",
          textHoverColor: "#2e7b7c",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#5be2e4",
          backgroundHoverColor: "#2e7b7c",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/iscmga-logo.png`,
          width: "80px",
          height: "40px",
          redirectionLink: "https://www.iscmga.com/",
          alterText: "Integrated Specialty Coverages MGA Network",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/iscmga/`,
          home: "https://www.iscmga.com/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/iscmga-logo.png`,
        logoStyles: {
          height: "40px",
        },
      },
    },
    colonial: {
      id: "colonial",
      agencyNetworkName: "Colonial General Insurance Agency Network",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#1197a0",
          textHoverColor: "#60b1b8",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#1197a0",
          backgroundHoverColor: "#60b1b8",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/colonial-white-logo.png`,
          width: "220px",
          height: "40px",
          redirectionLink: "https://www.colonialgeneral.com/",
          alterText: "Colonial General Insurance Agency Network",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/colonial/`,
          home: "https://www.colonialgeneral.com/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/colonial-white-logo.png`,
        logoStyles: {
          height: "40px",
        },
      },
    },
    mib: {
      id: "mib",
      agencyNetworkName: "Maximum Independent Brokerage",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#ff0203",
          textHoverColor: "#ad0203",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#ff0203",
          backgroundHoverColor: "#ad0203",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/mib-logo.png`,
          width: "220px",
          height: "40px",
          redirectionLink: "https://maxib.com/",
          alterText: "Maximum Independent Brokerage",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/mib/`,
          home: "https://maxib.com/",
        },
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/mib-logo.png`,
        logoStyles: {
          height: "40px",
        },
      },
    },
    // kraft: {
    //   id: 'kraft',
    //   agencyNetworkName: 'Kraft Lake Insurance Agency Network',
    //   navBar: {
    //     isVisible: true,
    //     navBackgroundColor: 'white',
    //     navHeight: '75px',
    //     navItem: {
    //       textColor: '#283c7a',
    //       textHoverColor: '#446dc0',
    //       fontSize: '14px',
    //       fontFamily: '"Lato", sans-serif',
    //     },
    //     button: {
    //       backgroundColor: '#283c7a',
    //       backgroundHoverColor: '#446dc0',
    //       textColor: 'white',
    //       fontWeight: '400',
    //       fontSize: '14px',
    //     },

    //     logo: {
    //       logoUrl: `https://${origin}.coverforce.com/logo/kraft-logo.png`,
    //       width: '90px',
    //       height: '50px',
    //       redirectionLink: 'https://www.linkedin.com/company/kraft-lake-insurance-agency/about/',
    //       alterText: 'Kraft Lake Insurance Agency Network',
    //     },
    //     link: {
    //       registerLink: `https://${origin}.coverforce.com/registration/kraft/`,
    //       home: 'https://www.linkedin.com/company/kraft-lake-insurance-agency/about/',
    //     },
    //   },
    //   pageBackground: {
    //     backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
    //   },
    //   widget: {
    //     logoUrl: `https://${origin}.coverforce.com/logo/kraft-logo.png`,
    //     logoStyles: {
    //       height: '50px',
    //     },
    //   },
    // },
    // alera: {
    //   id: 'alera',
    //   agencyNetworkName: 'Alera Group Agency Network',
    //   navBar: {
    //     isVisible: true,
    //     navBackgroundColor: 'white',
    //     navHeight: '75px',
    //     navItem: {
    //       textColor: '#01adf0',
    //       textHoverColor: '#343333',
    //       fontSize: '14px',
    //       fontFamily: '"Lato", sans-serif',
    //     },
    //     button: {
    //       backgroundColor: '#01adf0',
    //       backgroundHoverColor: '#343333',
    //       textColor: 'white',
    //       fontWeight: '400',
    //       fontSize: '14px',
    //     },

    //     logo: {
    //       logoUrl: `https://${origin}.coverforce.com/logo/alera-logo.png`,
    //       width: '220px',
    //       height: '25px',
    //       redirectionLink: 'https://aleragroup.com/',
    //       alterText: 'Alera Group Agency Network',
    //     },
    //     link: {
    //       registerLink: `https://${origin}.coverforce.com/registration/alera/`,
    //       home: 'https://aleragroup.com/',
    //     },
    //   },
    //   pageBackground: {
    //     backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
    //   },
    //   widget: {
    //     logoUrl: `https://${origin}.coverforce.com/logo/alera-logo.png`,
    //     logoStyles: {
    //       height: '25px',
    //     },
    //   },
    // },
    voldico: {
      id: "voldico",
      agencyNetworkName: "Voldico Insurance Agency Network",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#E1832A",
          textHoverColor: "#bf6118",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#E1832A",
          backgroundHoverColor: "#bf6118",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/voldico-logo.svg`,
          width: "180px",
          height: "45px",
          redirectionLink: "https://voldico.com/",
          alterText: "Voldico Insurance Agency Network",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/voldico/`,
          home: "https://voldico.com/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/voldico-logo.svg`,
        logoStyles: {
          height: "45px",
        },
      },
    },
    starwind: {
      id: "starwind",
      agencyNetworkName: "Starwind Agency Network",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#58b7b2",
          textHoverColor: "#4aa19c",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#58b7b2",
          backgroundHoverColor: "#4aa19c",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/starwind-logo.png`,
          width: "135px",
          height: "45px",
          redirectionLink: "https://www.starwindins.com/",
          alterText: "Starwind Agency Network",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/starwind/`,
          home: "https://www.starwindins.com/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/starwind-logo.png`,
        logoStyles: {
          height: "45px",
          width: "135px",
        },
      },
    },
    frp: {
      id: "frp",
      agencyNetworkName: "Foundation Risk Partners Agency Network",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#00203d",
          textHoverColor: "#6ba1b9",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#00203d",
          backgroundHoverColor: "#6ba1b9",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/frp-logo.png`,
          width: "200px",
          height: "50px",
          redirectionLink: "https://foundationrp.com/",
          alterText: "Foundation Risk Partners Agency Network",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/frp/`,
          home: "https://foundationrp.com/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/frp-logo.png`,
        logoStyles: {
          height: "50px",
          width: "200px",
        },
      },
    },
    trustadvisors: {
      id: "trustadvisors",
      agencyNetworkName: "Trust Advisors Agency Network",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#417ec9",
          textHoverColor: "#2c588e",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#417ec9",
          backgroundHoverColor: "#2c588e",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/trustadvisors-logo.png`,
          width: "75px",
          height: "50px",
          redirectionLink: "https://amtrustfinancial.com/",
          alterText: "Trust Advisors Agency Network",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/trustadvisors/`,
          home: "https://amtrustfinancial.com/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/trustadvisors-logo.png`,
        logoStyles: {
          height: "50px",
          width: "75px",
        },
      },
    },
    jencap: {
      id: "jencap",
      agencyNetworkName: "Jencap Agency Network",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#01ab62",
          textHoverColor: "#00764f",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#01ab62",
          backgroundHoverColor: "#00764f",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/jencap-logo.svg`,
          width: "140px",
          height: "60px",
          redirectionLink: "https://jencapgroup.com/",
          alterText: "Jencap Agency Network",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/jencap/`,
          home: "https://jencapgroup.com/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/jencap-logo.svg`,
        logoStyles: {
          height: "60px",
          width: "140px",
        },
      },
    },
    trupoint: {
      id: "trupoint",
      agencyNetworkName: "TruPoint Underwriters Agency Network",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#000000",
          textHoverColor: "#c1b49a",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#000000",
          backgroundHoverColor: "#c1b49a",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/trupoint-logo.png`,
          width: "165px",
          height: "40px",
          redirectionLink: "https://www.trupointco.com/",
          alterText: "TruPoint Underwriters Agency Network",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/trupoint/`,
          home: "https://www.trupointco.com/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/trupoint-logo.png`,
        logoStyles: {
          height: "40px",
          width: "165px",
        },
      },
    },
    djl: {
      id: "djl",
      agencyNetworkName: "David J Louie Agency Network",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#27428f",
          textHoverColor: "#576da7",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#27428f",
          backgroundHoverColor: "#576da7",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/djl-logo.png`,
          width: "160px",
          height: "40px",
          redirectionLink: "https://davidjlouie.com/",
          alterText: "David J Louie Agency Network",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/djl/`,
          home: "https://davidjlouie.com/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/djl-logo.png`,
        logoStyles: {
          height: "40px",
          width: "160px",
        },
      },
    },
    one80: {
      id: "one80",
      agencyNetworkName: "One80 Agency Network",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#03BFFF",
          textHoverColor: "#58CCFF",
          fontSize: "14px",
          fontFamily: '"Lato", sans-serif',
        },
        button: {
          backgroundColor: "#03BFFF",
          backgroundHoverColor: "#58CCFF",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/logo/one80-logo.png`,
          width: "80px",
          height: "60px",
          redirectionLink: "https://www.one80network.com/",
          alterText: "One80 Agency Network",
        },
        link: {
          registerLink: `https://${origin}.coverforce.com/registration/one80/`,
          home: "https://www.one80network.com/",
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/logo/one80-logo.png`,
        logoStyles: {
          height: "60px",
          width: "80px",
        },
      },
    },
    indium: {
      id: "indium",
      agencyNetworkName: "Indium",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#00205c",
          textHoverColor: "#00205c",
          fontSize: "14px",
          fontFamily: "Poppins, Arial, Helvetica, sans-serif",
        },
        button: {
          backgroundColor: "#00205c",
          backgroundHoverColor: "#00205c",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/login/indium/indium_login_logo.png`,
          width: "145px",
          height: "45px",
          redirectionLink: "https://goindium.com",
          alterText: "Indium Logo",
        },
        link: {
          home: "https://goindium.com",
          registerLink: `https://${origin}.coverforce.com/registration/gaig/`,
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/login/indium/indium_login_logo.png`,
      },
    },
    asnoa: {
      id: "asnoa",
      agencyNetworkName: "ASNOA",
      navBar: {
        isVisible: true,
        navBackgroundColor: "white",
        navHeight: "75px",
        navItem: {
          textColor: "#00205c",
          textHoverColor: "#00205c",
          fontSize: "14px",
          fontFamily: "Poppins, Arial, Helvetica, sans-serif",
        },
        button: {
          backgroundColor: "#00205c",
          backgroundHoverColor: "#00205c",
          textColor: "white",
          fontWeight: "400",
          fontSize: "14px",
        },

        logo: {
          logoUrl: `https://${origin}.coverforce.com/login/asnoa/asnoa_login_logo.png`,
          width: "140",
          height: "30",
          redirectionLink: "https://asnoa.com/",
          alterText: "ASNOA",
        },
        link: {
          home: "https://asnoa.com/",
          registerLink: `https://${origin}.coverforce.com/registration/asnoa/`,
        },
      },
      pageBackground: {
        backgroundImageUrl: `https://${origin}.coverforce.com/login/paramount/paramount_login_bg.jpg`,
      },
      widget: {
        logoUrl: `https://${origin}.coverforce.com/login/asnoa/asnoa_login_logo.png`,
        logoStyles: {
          width: "145px",
          height: "30px",
        },
      },
    },
  };
}

app.get("/data/:envName", (req, res) => {
  const env = req.params.envName;
  res.json(getConfig(env));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
