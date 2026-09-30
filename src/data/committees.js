const photo = id => `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=max`;

export const committees = [
  {
    slug: 'unhrc',
    acronym: 'UNHRC',
    name: 'United Nations Human Rights Council',
    tagline: 'Protection, dignity, and accountability on the world stage.',
    description:
      'Delegates take on the role of member states to examine pressing human rights concerns from around the globe, negotiating resolutions that balance state sovereignty against universal human rights protections.',
    type: 'General Assembly',
    image: photo('photo-1623278589094-6741f418d3bf')
  },
  {
    slug: 'disec',
    acronym: 'DISEC',
    name: 'Disarmament and International Security Committee',
    tagline: 'The First Committee of the UN General Assembly.',
    description:
      'DISEC addresses disarmament, global security challenges, and threats to international peace, pushing delegates to craft cooperative solutions within a fractured security landscape.',
    type: 'General Assembly',
    image: photo('photo-1589519160732-57fc498494f8')
  },
  {
    slug: 'unodc',
    acronym: 'UNODC',
    name: 'United Nations Office on Drugs and Crime',
    tagline: 'Confronting transnational crime and illicit trade.',
    description:
      'Delegates assist member states in the fight against illicit drugs, organised crime, and terrorism, crafting policy responses to threats that cross borders and jurisdictions.',
    type: 'Specialised Agency',
    image: photo('photo-1589994965851-a8f479c573a9')
  },
  {
    slug: 'lok-sabha',
    acronym: 'LOK SABHA',
    name: 'Simulation of the Lok Sabha',
    tagline: "India's House of the People, debated and legislated.",
    description:
      'A simulation of the lower house of the Indian Parliament, where delegates step into the roles of Members of Parliament to debate, deliberate, and legislate on pressing national issues.',
    type: 'National Legislature',
    image: photo('photo-1760872646289-5da7cb893dd4')
  },
  {
    slug: 'tfi',
    acronym: 'TFI',
    name: 'Telugu Film Industry',
    tagline: 'A specialised committee set within the world of cinema.',
    description:
      'A themed, specialised committee built around the business, politics, and culture of the Telugu Film Industry, blending negotiation, strategy, and storytelling in a distinctly regional setting.',
    type: 'Specialised Committee',
    image: photo('photo-1440404653325-ab127d49abc1')
  },
  {
    slug: 'ip',
    acronym: 'IP',
    name: 'International Press',
    tagline: 'Reporting the conference as it happens.',
    description:
      'The press corps of CaeloraMUN 2026, responsible for reporting, photography, and media coverage of committee proceedings throughout the conference. International Press registers separately from delegates.',
    type: 'Press Corps',
    registrationPath: '/press',
    image: photo('photo-1510127034890-ba27508e9f1c')
  }
];

export const getCommittee = slug => committees.find(committee => committee.slug === slug);
