/* Punaruttham booth content. Updated 6 October 2026. */
window.EXHIBIT = {
  "edp": [
    {
      "short": "Define",
      "label": "Define the problem",
      "title": "Protect the original. Preserve its meaning.",
      "body": "Our challenge combines three needs: make worn inscriptions easier to see, reach them consistently and keep their information accessible.",
      "takeaway": "Capture surviving detail without touching the inscription.",
      "evidence": "We focused on fading inscriptions, environmental deterioration, difficult access and the specialist work needed to interpret them."
    },
    {
      "short": "Research",
      "label": "Conduct research",
      "title": "Understand the surface. Understand the reader.",
      "body": "We explored inscription recording, epigraphy and the limits of a single photograph. We compared the information supplied by surface geometry, changing illumination and different light channels.",
      "takeaway": "Combine complementary views and preserve the original capture.",
      "evidence": "Our research connects structured light, Reflectance Transformation Imaging (RTI), multispectral capture and AI-assisted interpretation. Experts remain central to reviewing readings."
    },
    {
      "short": "Imagine",
      "label": "Brainstorm & conceptualise",
      "title": "Choose a system around the problem.",
      "body": "We considered handheld capture, fixed cameras, drones, robot arms and mobile platforms. We selected a wheeled rover for positioning a non-contact scanner and carrying the required modules.",
      "takeaway": "A mobile, modular rover brings capture and preservation into one workflow.",
      "evidence": "Alternatives were compared against access, repeatability, affordability, portability and maintainability. Aerial access remains a longer-term research direction."
    },
    {
      "short": "Prototype",
      "label": "Create a prototype",
      "title": "Build in modules. Bring them together.",
      "body": "Our development brought together the mobile base, scanning assembly, sensors, lighting, movement and processing. Laser-cut interlocking rover panels make the inner engineering accessible.",
      "takeaway": "Separate imaging, motion, processing, power and records into clear functions.",
      "evidence": "Early work included an Arduino obstacle-sensing rover and Raspberry Pi camera experiments. These informed the later laptop-based system and moving scanning body."
    },
    {
      "short": "Select",
      "label": "Select & finalise",
      "title": "Let every component earn its place.",
      "body": "The system uses a USB camera and laptop for capture and processing, with a local controller handling motion. Cloud interpretation is backed by a local Qwen model.",
      "takeaway": "Keep heavy processing on the laptop and bounded movement on the controller.",
      "evidence": "Design choices evolved from earlier Pi-centred proposals. Modular construction, a motorised lift and separate sensing functions support the current architecture."
    },
    {
      "short": "Analyse",
      "label": "Analyse our work",
      "title": "Examine the evidence at every step.",
      "body": "Our evaluation focuses on image clarity, lighting, camera distance, positioning, obstacle response and the consistency of complete scans. Interpretation is assessed separately from capture.",
      "takeaway": "Compare raw and processed evidence, then inspect uncertainty and failure cases.",
      "evidence": "The test programme covers varying light and standoff, motion repeatability, module reconnection and camera/API/network failure. We do not equate a confidence score with measured accuracy."
    },
    {
      "short": "Improve",
      "label": "Improve Punaruttham",
      "title": "Make each iteration more useful.",
      "body": "We refined the rover’s status feedback, scanning movement and processing architecture. The International system brings together auto-cropping, mode selection, heatmaps, damage analysis and reports.",
      "takeaway": "Use each observation to improve reliability, clarity and access.",
      "evidence": "Documented revisions include servo-mounted sensing, an I²C display, red/green status LEDs and the shift to laptop processing. Our next expansion focuses on wider access and expert-led field use."
    }
  ],
  "featureGroups": [
    {
      "id": "capture",
      "title": "Capture",
      "subtitle": "See the surviving detail",
      "icon": "scan",
      "intro": "A coordinated scanner records the surface without physical contact.",
      "items": [
        [
          "Non-contact scanning",
          "Record inscriptions while preserving the original surface.",
          "The rover positions its imaging equipment at a controlled distance. Images and sensing data become a digital record without pressing recording material onto the inscription.",
          "Protects fragile originals while retaining evidence for later study."
        ],
        [
          "Autonomous target detection",
          "Locate the inscription and crop the relevant region.",
          "Vision identifies an inscription-bearing area, selects a region of interest and passes its position to the scanning workflow. Auto-cropping focuses subsequent processing on the target.",
          "Reduces repeated manual framing and keeps analysis focused."
        ],
        [
          "Automatic scan selection",
          "Choose normal, RTI, structured-light or multispectral capture.",
          "The system selects a capture strategy for the target and coordinates acquisition. Complementary modes reveal different aspects of the same surface.",
          "Connects the choice of imaging method to the inscription being examined."
        ],
        [
          "Motorised lift & viewpoints",
          "Align the scanning body with the inscription.",
          "Height adjustment and camera positioning bring the scanning head to the target. The controller moves within its limits and signals readiness before capture.",
          "Supports repeatable framing across inscription positions."
        ],
        [
          "Reflectance Transformation Imaging",
          "Relight a captured surface and give the AI more to examine.",
          "Photographs under different lighting directions become an interactive surface view. Experts adjust the virtual light’s direction and brightness to inspect detail. Each RTI image compilation also goes to the AI and supports the CNN.",
          "One capture collection supports both expert inspection and AI analysis."
        ],
        [
          "Structured-light capture",
          "Use projected patterns to examine surface geometry.",
          "The camera records how patterns change across the surface. Calibrated geometric processing supports depth and shape analysis alongside ordinary images.",
          "Adds geometric information to colour and texture."
        ],
        [
          "Multispectral imaging",
          "Compare the inscription across light channels.",
          "Separate light channels provide complementary views of the surface. They are considered alongside visible imagery rather than treated as interchangeable with thermal or depth sensing.",
          "Expands the evidence available for analysing a difficult surface."
        ],
        [
          "Thermal, depth & dimensions",
          "Bring additional sensing into the scan record.",
          "Thermal imagery, geometric depth and dimension checking are separate inputs. Distance sensing helps position the scanner; surface analysis supplies shape and measurement information.",
          "Adds context to the inscription’s appearance and geometry."
        ]
      ]
    },
    {
      "id": "analyse",
      "title": "Analyse",
      "subtitle": "Reveal structure & condition",
      "icon": "layers",
      "intro": "Raw evidence stays connected to every enhanced view and analytical layer.",
      "items": [
        [
          "Image enhancement",
          "Prepare complementary views for the CNN.",
          "Gaussian blur reduces image noise, CLAHE improves local contrast, and the Sobel Scale filter highlights edges. These processed views and RTI image compilations support the CNN’s analysis of the inscription.",
          "Makes the image-processing tools and their role in the AI system explicit."
        ],
        [
          "Before & after comparison",
          "Compare the original capture with its processed view.",
          "Side-by-side raw and processed images help visitors and experts see what changed during enhancement. The original remains available for independent examination.",
          "Makes the processing transparent."
        ],
        [
          "Topography & 3D reconstruction",
          "Explore the form of a stone or clay tablet.",
          "Surface information is used to create relief visualisations and a 3D model. These outputs describe geometry and complement the inscription’s text record.",
          "Makes shape available for analysis, documentation and replicas."
        ],
        [
          "Material identification",
          "Distinguish stone and clay/tablet surfaces.",
          "Visual and sensing information supports a material classification that informs interpretation of the scan. This label remains part of the contextual record.",
          "Helps organise scans and select appropriate analysis."
        ],
        [
          "Damage mapping",
          "Locate cracks, erosion and missing regions.",
          "A visual condition layer marks damaged and incomplete areas so that surviving marks can be distinguished from missing material.",
          "Directs attention to regions that need closer expert examination."
        ],
        [
          "Preservation-priority assessment",
          "Highlight Stable, At Risk and Urgent records.",
          "Condition information supports a proposed preservation-priority label. It is a decision aid for expert review, rather than a conservation diagnosis on its own.",
          "Helps prioritise which inscriptions to examine further."
        ],
        [
          "Confidence & topographic heatmaps",
          "Make uncertainty and surface variation visible.",
          "Character-level confidence and surface-based visualisations indicate where an interpretation needs attention. A confidence value expresses model uncertainty; it is not an accuracy claim.",
          "Shows where human judgement matters most."
        ]
      ]
    },
    {
      "id": "interpret",
      "title": "Interpret",
      "subtitle": "From traces to meaning",
      "icon": "text",
      "intro": "Recognition, reconstruction and translation remain distinct steps.",
      "items": [
        [
          "Script identification",
          "Identify the writing system before reading it.",
          "The interpretation workflow considers script identity so that glyph analysis can use relevant examples and references.",
          "Provides context for reading historical characters."
        ],
        [
          "Brahmi recognition support",
          "Add script-specific support to the AI workflow.",
          "brahmiGAN, the Brahmi Kaggle dataset and the team’s CNN, FNN, PINN and PINO components support Brahmi interpretation alongside Claude Sonnet 5.",
          "Connects general AI with the project’s own models and Brahmi material."
        ],
        [
          "Transcription & transliteration",
          "Keep what is read separate from how it is written.",
          "Transcription records the recognised characters. Transliteration represents those characters in another writing system while retaining their link to the source.",
          "Makes the reading easier to inspect and compare."
        ],
        [
          "Digital reconstruction",
          "Propose readings for damaged or missing characters.",
          "The system offers candidate reconstructions with uncertainty information. Reconstructed regions are distinguished from characters supported directly by the surviving surface.",
          "Enables useful hypotheses without obscuring the original evidence."
        ],
        [
          "Translation",
          "Make a reading accessible in another language.",
          "The interpreted text is translated for understanding and sharing. The record preserves the source, transcription, transliteration and proposed meaning together.",
          "Connects specialist readings with a wider audience."
        ],
        [
          "Cloud AI & local fallback",
          "Use Claude Sonnet 5, with Qwen available locally.",
          "Claude Sonnet 5 supports analysis and interpretation through its API. If the API is unavailable, the system uses a local Qwen model.",
          "Keeps a local interpretation route available when the online service cannot be used."
        ],
        [
          "Historical reference fallback",
          "Consult a James Prinsep chart when learned readings remain unresolved.",
          "If Brahmi interpretation remains unresolved after using the learned models and Brahmi material, the system uses a James Prinsep chart as an additional decipherment reference.",
          "Provides another route for examining difficult characters."
        ],
        [
          "Expert review & corrections",
          "Keep the specialist in the interpretation loop.",
          "Experts can inspect the raw evidence, compare derived views and accept, reject or correct a proposed reading. Corrections remain associated with the inscription record.",
          "Supports accountable interpretation and better records."
        ]
      ]
    },
    {
      "id": "preserve",
      "title": "Preserve",
      "subtitle": "Create a lasting record",
      "icon": "archive",
      "intro": "The result is a connected body of evidence, interpretation and reusable outputs.",
      "items": [
        [
          "Accessible digital archive",
          "Save the translation and the evidence that gives it context.",
          "The universally accessible archive app saves translations and important inscription data, connecting the reading with its captures, metadata and derived outputs.",
          "Makes records available for revisiting, study and sharing."
        ],
        [
          "Interactive RTI files",
          "Let experts adjust light direction and brightness.",
          "Saved RTI files let experts change the virtual light’s direction and brightness to examine surface detail digitally. The corresponding image compilation also supports AI analysis.",
          "Preserves an inscription as something experts can explore, as well as view."
        ],
        [
          "3D stone & tablet models",
          "Preserve the shape as well as the words.",
          "A three-dimensional model provides a reusable representation of the inscription-bearing object for study, visualisation and replica workflows.",
          "Connects textual interpretation to physical form."
        ],
        [
          "Laser-cuttable & CNC outputs",
          "Create fabrication files for museum replicas.",
          "Punaruttham creates laser-cuttable files and CNC/G-code for an external CNC-shield-controlled fabrication setup. Alongside its 3D stone and clay-tablet models, these outputs help museums make replicas.",
          "Lets museums reproduce an inscription without handling the original."
        ],
        [
          "Automatic scan reports",
          "Bring the scan evidence into one document.",
          "Reports combine images, measurements, interpretation, uncertainty and metadata, keeping the scan’s context with its conclusions.",
          "Makes results easier to review, discuss and share."
        ],
        [
          "Originals, metadata & history",
          "Retain the context behind each result.",
          "Records keep original captures alongside processed views, interpretation and expert corrections. Source evidence remains available when a reading changes.",
          "Lets future users revisit the basis of an earlier interpretation."
        ]
      ]
    },
    {
      "id": "experience",
      "title": "Interact",
      "subtitle": "Designed for people & places",
      "icon": "people",
      "intro": "A usable system makes complex evidence understandable and accessible.",
      "items": [
        [
          "Persistent language profiles",
          "Let language preferences follow the user.",
          "A preferred-language profile applies across explanations, voice output, translations, interface and saved records.",
          "Makes repeat use more accessible."
        ],
        [
          "Voice interaction & explanation",
          "Offer another way to engage with the system.",
          "Voice input and spoken explanations support hands-free interaction and museum-style interpretation alongside visual controls.",
          "Broadens how people can explore inscription information."
        ],
        [
          "Face-authenticated accounts",
          "Connect an identified user with their profile.",
          "Face authentication supports recognition of a returning account and its preferences within the archive experience.",
          "Personalises access to the user’s saved context."
        ],
        [
          "Obstacle & status feedback",
          "Make distance and robot status understandable.",
          "Ultrasonic or VL53L1X range sensing supports positioning and obstacle awareness. LEDs, a buzzer and the status display communicate what the rover is doing.",
          "Provides visible and audible feedback around a moving system."
        ],
        [
          "Modular & repairable construction",
          "Access the function that needs attention.",
          "Scanning, motion, processing, power and archive functions are organised as modules. Removable rover panels expose components for inspection, repair and upgrades.",
          "Supports maintainability and future module sharing."
        ],
        [
          "A complete scan-to-archive workflow",
          "Connect physical action to a preserved result.",
          "Detect, position, choose a mode, capture, enhance, interpret, review and archive. Each stage contributes to an understandable end-to-end preservation process.",
          "Turns separate technologies into one coherent system."
        ]
      ]
    }
  ],
  "technology": [
    {
      "id": "sensing",
      "name": "Sense & capture",
      "kicker": "INPUTS",
      "icon": "scan",
      "headline": "Several views. One inscription.",
      "description": "The 1080p USB camera captures the inscription. Range sensing supports positioning, while thermal imagery adds a separate view of the surface.",
      "components": [
        [
          "1080p USB camera",
          "Main image capture",
          "Records the inscription and supplies images to the laptop, where the main processing takes place."
        ],
        [
          "Ultrasonic or VL53L1X",
          "Range sensing",
          "An ultrasonic sensor measures acoustic travel time; the VL53L1X uses optical time of flight. These are the project’s alternative range-sensing options for positioning and obstacle awareness."
        ],
        [
          "Thermal camera",
          "Thermal imagery",
          "Adds a thermal view of the surface alongside the main USB-camera images. Thermal information remains distinct from surface geometry."
        ],
        [
          "Depth & dimension checking",
          "Geometry & measurement",
          "Supports the inscription’s shape, dimensions and topographic representation."
        ],
        [
          "Controlled light & projection",
          "Complementary capture modes",
          "Changing illumination and projected patterns support RTI, structured-light and multispectral capture."
        ]
      ]
    },
    {
      "id": "motion",
      "name": "Position & control",
      "kicker": "PHYSICAL SYSTEM",
      "icon": "move",
      "headline": "The right view starts with positioning.",
      "description": "The mobile base and moving scanning body align the imaging equipment. A local controller carries out bounded movement.",
      "components": [
        [
          "Wheeled rover",
          "Mobile platform",
          "Moves the scanning assembly to a target while monitoring obstacles."
        ],
        [
          "Motorised scanning lift",
          "Height & viewpoint control",
          "Linear-actuator positioning moves the upper scanning body to the inscription."
        ],
        [
          "Arduino UNO R4 WiFi",
          "Local motion controller",
          "Receives high-level positioning instructions and coordinates actuator and status behaviour."
        ],
        [
          "Feedback & limits",
          "Movement supervision",
          "Position feedback, readiness acknowledgement and travel limits coordinate movement with capture."
        ],
        [
          "Servo, motors & drivers",
          "Mechanical actuation",
          "Directional sensing and driven movement support the scan workflow."
        ],
        [
          "LEDs, buzzer & I²C display",
          "Visible and audible status",
          "Communicate movement, obstacle and process states."
        ],
        [
          "Modular frame & power",
          "Serviceable construction",
          "Laser-cut interlocking rover panels provide access to scanning, motion, processing and power modules."
        ]
      ]
    },
    {
      "id": "processing",
      "name": "Prepare & process",
      "kicker": "LAPTOP",
      "icon": "chip",
      "headline": "The laptop connects capture to analysis.",
      "description": "Main processing runs on the laptop. Gaussian blur, CLAHE, the Sobel Scale filter and RTI image creation provide complementary information to support the CNN.",
      "components": [
        [
          "Laptop computing",
          "Main processing hub",
          "Runs the capture, image-processing, visualisation and AI interpretation workflow. The camera is a 1080p USB camera; the laptop carries the main processing."
        ],
        [
          "Target detection & geometry",
          "Locate, crop & align",
          "Target detection, cropping and calibrated geometry connect the inscription’s image position with scanner positioning."
        ],
        [
          "Capture orchestration",
          "Coordinate the scan",
          "Coordinates the selected normal, RTI, structured-light or multispectral capture mode."
        ],
        [
          "Gaussian blur",
          "Image smoothing for CNN support",
          "Smooths local image variations to reduce noise in a prepared view of the inscription. This view supports the CNN alongside other processed imagery."
        ],
        [
          "CLAHE",
          "Local contrast enhancement",
          "Contrast Limited Adaptive Histogram Equalization improves local contrast while limiting over-amplification. It provides the CNN with another view of faint inscription detail."
        ],
        [
          "Sobel Scale filter",
          "Edge information for CNN support",
          "The project’s Sobel Scale filter highlights changes in image intensity and supplies edge information to support the CNN."
        ],
        [
          "RTI image creation",
          "Multi-light imagery for CNN & AI",
          "Combines captures under different illumination directions. RTI image compilations support the CNN and are also passed to the AI for analysis."
        ],
        [
          "Surface analysis",
          "Topography, shape & condition",
          "Produces topographic views and supports 3D representation, dimensions and analysis of the inscription-bearing surface."
        ]
      ]
    },
    {
      "id": "intelligence",
      "name": "Interpret & review",
      "kicker": "HYBRID AI",
      "icon": "text",
      "headline": "General intelligence, supported by script knowledge.",
      "description": "Claude Sonnet 5 provides cloud interpretation, with local Qwen available if the API fails. brahmiGAN, the Brahmi Kaggle dataset and the team’s own models support Brahmi analysis. A James Prinsep chart is the reference fallback for unresolved readings.",
      "components": [
        [
          "Claude Sonnet 5 API",
          "Cloud interpretation",
          "Supports inscription analysis, reading, reconstruction and translation through the project’s cloud API connection."
        ],
        [
          "Qwen local model",
          "Fallback when the API is unavailable",
          "Runs locally as the alternative interpretation route when the Claude API cannot be used."
        ],
        [
          "brahmiGAN",
          "Brahmi-specific AI support",
          "Brahmi material from brahmiGAN supports the project’s interpretation workflow alongside the Brahmi Kaggle dataset and the team’s models."
        ],
        [
          "Brahmi Kaggle dataset",
          "Script-specific data",
          "Provides Brahmi material to support character interpretation within the project’s AI workflow."
        ],
        [
          "CNN · FNN · PINN · PINO",
          "The team’s own AI components",
          "The team’s neural components support the AI. Gaussian blur, CLAHE, the Sobel Scale filter and RTI imagery specifically support the CNN."
        ],
        [
          "James Prinsep chart",
          "Fallback for unresolved Brahmi",
          "The system consults this historical character reference when the learned interpretation and Brahmi material do not resolve the reading."
        ],
        [
          "Uncertainty & expert corrections",
          "Review the interpretation",
          "Keeps visible evidence, uncertain readings and proposed reconstructions distinguishable, with expert review and corrections."
        ]
      ]
    },
    {
      "id": "outputs",
      "name": "Archive & reuse",
      "kicker": "OUTPUTS",
      "icon": "archive",
      "headline": "Preserve the evidence behind the reading.",
      "description": "An inscription record connects raw data, derived visualisations and interpretation to outputs that researchers and museums can reuse.",
      "components": [
        [
          "Accessible archive app",
          "Translation & important data",
          "Saves translations and important inscription data in a universally accessible archive, linked to the capture and its derived outputs."
        ],
        [
          "Interactive RTI file",
          "Direction & brightness controls",
          "Lets experts digitally change light direction and brightness to inspect surface detail. The RTI compilation also goes to the AI for analysis."
        ],
        [
          "Topographic creation",
          "Surface relief",
          "Creates a representation of the inscription-bearing surface’s relief, complementing the image and text record."
        ],
        [
          "3D stone & tablet models",
          "Digital shape for study & replicas",
          "Creates 3D models of stone and clay-tablet inscriptions for digital examination and museum replica workflows."
        ],
        [
          "Laser-cuttable files",
          "Museum fabrication output",
          "Produces a laser-cuttable file that a museum can use in its external replica-production workflow."
        ],
        [
          "CNC / G-code output",
          "Museum fabrication instructions",
          "Produces G-code for an external CNC-shield-controlled fabrication setup used to create inscription replicas."
        ],
        [
          "Scan report",
          "Connected documentation",
          "Collects images, measurements, interpretation, uncertainty and metadata in a reviewable report."
        ],
        [
          "Language & account preferences",
          "Accessible interaction",
          "Keeps interface, explanations and saved-record language preferences with the user."
        ]
      ]
    }
  ],
  "future": [
    {
      "id": "phone",
      "category": "WIDER ACCESS",
      "title": "Preservation in your hand.",
      "body": "A lower-cost phone-based companion brings guided capture and human-assisted interpretation to more people.",
      "points": [
        "Use a phone camera for a more accessible entry point.",
        "Guide the user through the steps that the rover automates.",
        "Connect captured evidence with the archive and review workflow."
      ],
      "outcome": "Broaden participation beyond organisations with a full rover."
    },
    {
      "id": "modules",
      "category": "SHARED RESOURCES",
      "title": "A library of capabilities.",
      "body": "Purchase, whole-robot rental and individual module rental make access more flexible.",
      "points": [
        "Maintain a reserve of reusable modules for short-term needs.",
        "Record condition before and after each rental.",
        "Repair or replace the affected component and return usable modules to circulation."
      ],
      "outcome": "Make specialised equipment more affordable and maintainable."
    },
    {
      "id": "scripts",
      "category": "DEEPER KNOWLEDGE",
      "title": "More scripts. Stronger evidence.",
      "body": "Expand beyond the present Brahmi focus with more expert-labelled material and better evaluated models.",
      "points": [
        "Build script-specific reference collections with appropriate permissions.",
        "Evaluate transcription, reconstruction and translation separately.",
        "Use expert corrections to improve the quality of future records."
      ],
      "outcome": "Serve a wider range of inscriptions without hiding uncertainty."
    },
    {
      "id": "monitoring",
      "category": "LONG-TERM PRESERVATION",
      "title": "See change across time.",
      "body": "Compare repeat scans to track erosion and changes in condition, building on today’s damage maps.",
      "points": [
        "Align later captures with earlier records.",
        "Separate imaging differences from actual surface change.",
        "Study how change over time can support preservation priorities."
      ],
      "outcome": "Move from documenting a moment to understanding deterioration."
    },
    {
      "id": "pilots",
      "category": "FIELD COLLABORATION",
      "title": "From exhibit to field use.",
      "body": "Work towards expert-supervised pilots with museums, universities, epigraphists and heritage organisations.",
      "points": [
        "Test on permitted samples under appropriate supervision.",
        "Compare the workflow with the institution’s existing documentation.",
        "Use feedback to improve scanning, interpretation and reporting."
      ],
      "outcome": "Develop evidence of practical value in real preservation work."
    },
    {
      "id": "reach",
      "category": "RESEARCH HORIZON",
      "title": "Reach harder places.",
      "body": "Explore additional platforms, including aerial access, for inscriptions beyond the rover’s practical reach.",
      "points": [
        "Compare reach, stability, access and capture quality.",
        "Adapt positioning and imaging to the platform.",
        "Retain non-contact capture and protection of the original."
      ],
      "outcome": "Extend documentation to more difficult settings."
    },
    {
      "id": "provenance",
      "category": "RESEARCH HORIZON",
      "title": "A traceable history of each record.",
      "body": "Explore stronger provenance across institutions, including the role of hashes, version history and optional blockchain.",
      "points": [
        "Keep the original capture and its derived versions connected.",
        "Show who changed a reading and why.",
        "Assess whether a shared ledger solves a real multi-party need."
      ],
      "outcome": "Make changes traceable while keeping interpretations correctable."
    }
  ],
  "business": [
    [
      "partners",
      "Potential collaborators",
      "Epigraphists, universities, museums and heritage organisations.",
      "Pilot work, reference expertise and feedback are the route to a useful preservation tool. These are intended collaborators, not claims of formal partnerships."
    ],
    [
      "activities",
      "Key activities",
      "Capture, analyse, interpret, preserve and support.",
      "Maintain modules, improve models, document workflows and support institutions using the system."
    ],
    [
      "value",
      "Value proposition",
      "Non-contact capture with connected evidence and interpretation.",
      "Bring repeatable imaging, visible uncertainty, accessible records and museum replica outputs into one workflow."
    ],
    [
      "relationships",
      "User relationships",
      "Expert feedback and ongoing technical support.",
      "Develop the system through supervised pilots, shared review and responsive maintenance."
    ],
    [
      "customers",
      "Intended users",
      "Museums, universities, epigraphists and heritage teams.",
      "The phone companion also opens an entry point for students and a wider interested public."
    ],
    [
      "resources",
      "Key resources",
      "The rover, modules, software, data and expertise.",
      "Imaging hardware, reusable modules, computing, reference material and the skills to operate and maintain them."
    ],
    [
      "channels",
      "Access channels",
      "Direct institutional use, rental and a digital archive.",
      "Reach users through demonstrations, expert-led pilots, institutional adoption and accessible digital records."
    ],
    [
      "costs",
      "Cost structure",
      "Build, maintain, transport, compute and support.",
      "Track component replacement, repairs, setup, storage, cloud operation and rental downtime. Final prices depend on actual cost evidence."
    ],
    [
      "revenue",
      "Access & revenue model",
      "Purchase · robot rental · module rental.",
      "Offer access at different scales and explore the phone companion. Commercial terms and prices will be developed from pilot needs and real costs."
    ]
  ],
  "workflow": [
    {
      "title": "Capture the evidence",
      "caption": "1080p USB camera · range · thermal",
      "text": "The camera supplies inscription images to the laptop. Sensing helps position the scanner and adds complementary surface information.",
      "links": [
        "1080p USB camera",
        "Ultrasonic or VL53L1X",
        "Thermal camera"
      ]
    },
    {
      "title": "Prepare supporting views",
      "caption": "Gaussian blur · CLAHE · Sobel · RTI",
      "text": "Image preparation and RTI compilations support the CNN. These methods supply complementary views; this diagram does not prescribe a fixed filter order.",
      "links": [
        "Gaussian blur",
        "CLAHE",
        "Sobel Scale filter",
        "RTI image creation"
      ]
    },
    {
      "title": "Interpret with support",
      "caption": "Claude · Qwen · Brahmi material · custom AI",
      "text": "Cloud and local interpretation connect with the team’s own models and Brahmi material. Unresolved readings can use the Prinsep reference.",
      "links": [
        "Claude Sonnet 5 API",
        "Qwen local model",
        "CNN · FNN · PINN · PINO",
        "James Prinsep chart"
      ]
    },
    {
      "title": "Preserve & reproduce",
      "caption": "Archive · interactive RTI · 3D · laser · CNC",
      "text": "Keep the translation and important data accessible, give experts an interactive surface record, and create files museums can use for replicas.",
      "links": [
        "Accessible archive app",
        "Interactive RTI file",
        "3D stone & tablet models",
        "Laser-cuttable files",
        "CNC / G-code output"
      ]
    }
  ],
  "details": {
    "Image enhancement": {
      "heading": "Four complementary supports for the CNN",
      "cards": [
        [
          "Gaussian blur",
          "Smooth local variations and reduce noise.",
          "Gaussian blur"
        ],
        [
          "CLAHE",
          "Enhance local contrast in faint areas.",
          "CLAHE"
        ],
        [
          "Sobel Scale filter",
          "Expose edge and intensity-change information.",
          "Sobel Scale filter"
        ],
        [
          "RTI image creation",
          "Provide views of the surface under changing light.",
          "RTI image creation"
        ]
      ],
      "related": [
        "CNN · FNN · PINN · PINO",
        "Laptop computing"
      ]
    },
    "Gaussian blur": {
      "heading": "Its role in Punaruttham",
      "cards": [
        [
          "Prepared image",
          "A smoothed view reduces distracting local image noise."
        ],
        [
          "CNN support",
          "That view is used alongside contrast, edge and RTI information.",
          "CNN · FNN · PINN · PINO"
        ]
      ],
      "related": [
        "CLAHE",
        "Sobel Scale filter",
        "RTI image creation"
      ]
    },
    "CLAHE": {
      "heading": "Local contrast for difficult detail",
      "cards": [
        [
          "Local enhancement",
          "Improves contrast in separate image regions."
        ],
        [
          "Contrast limiting",
          "Limits amplification while creating a supporting view for the CNN."
        ]
      ],
      "related": [
        "Gaussian blur",
        "Sobel Scale filter",
        "CNN · FNN · PINN · PINO"
      ]
    },
    "Sobel Scale filter": {
      "heading": "A view of changing intensity",
      "cards": [
        [
          "Edge information",
          "Highlights local intensity changes that describe edges."
        ],
        [
          "CNN support",
          "Adds edge information to the other processed and RTI views.",
          "CNN · FNN · PINN · PINO"
        ]
      ],
      "related": [
        "Gaussian blur",
        "CLAHE",
        "RTI image creation"
      ]
    },
    "Reflectance Transformation Imaging": {
      "heading": "One capture collection. Two uses.",
      "cards": [
        [
          "For the expert",
          "An interactive file with control over virtual light direction and brightness.",
          "Interactive RTI file"
        ],
        [
          "For the AI",
          "The RTI image compilation is analysed by the AI and supports the CNN.",
          "RTI image creation"
        ]
      ],
      "related": [
        "CNN · FNN · PINN · PINO",
        "Accessible archive app"
      ]
    },
    "Interactive RTI files": {
      "heading": "One capture collection. Two uses.",
      "cards": [
        [
          "For the expert",
          "An interactive file with control over virtual light direction and brightness.",
          "Interactive RTI file"
        ],
        [
          "For the AI",
          "The RTI image compilation is analysed by the AI and supports the CNN.",
          "RTI image creation"
        ]
      ],
      "related": [
        "CNN · FNN · PINN · PINO",
        "Accessible archive app"
      ]
    },
    "Interactive RTI file": {
      "heading": "One capture collection. Two uses.",
      "cards": [
        [
          "For the expert",
          "An interactive file with control over virtual light direction and brightness.",
          "Interactive RTI file"
        ],
        [
          "For the AI",
          "The RTI image compilation is analysed by the AI and supports the CNN.",
          "RTI image creation"
        ]
      ],
      "related": [
        "CNN · FNN · PINN · PINO",
        "Accessible archive app"
      ]
    },
    "RTI image creation": {
      "heading": "One capture collection. Two uses.",
      "cards": [
        [
          "For the expert",
          "An interactive file with control over virtual light direction and brightness.",
          "Interactive RTI file"
        ],
        [
          "For the AI",
          "The RTI image compilation is analysed by the AI and supports the CNN.",
          "RTI image creation"
        ]
      ],
      "related": [
        "CNN · FNN · PINN · PINO",
        "Accessible archive app"
      ]
    },
    "Cloud AI & local fallback": {
      "heading": "Two different reasons to use a fallback",
      "cards": [
        [
          "The API is unavailable",
          "Use the Qwen model locally.",
          "Qwen local model"
        ],
        [
          "Brahmi remains unresolved",
          "Consult a James Prinsep chart after the learned interpretation does not resolve it.",
          "James Prinsep chart"
        ]
      ],
      "related": [
        "Claude Sonnet 5 API",
        "brahmiGAN",
        "Brahmi Kaggle dataset"
      ]
    },
    "Historical reference fallback": {
      "heading": "Two different reasons to use a fallback",
      "cards": [
        [
          "The API is unavailable",
          "Use the Qwen model locally.",
          "Qwen local model"
        ],
        [
          "Brahmi remains unresolved",
          "Consult a James Prinsep chart after the learned interpretation does not resolve it.",
          "James Prinsep chart"
        ]
      ],
      "related": [
        "Claude Sonnet 5 API",
        "brahmiGAN",
        "Brahmi Kaggle dataset"
      ]
    },
    "Claude Sonnet 5 API": {
      "heading": "Two different reasons to use a fallback",
      "cards": [
        [
          "The API is unavailable",
          "Use the Qwen model locally.",
          "Qwen local model"
        ],
        [
          "Brahmi remains unresolved",
          "Consult a James Prinsep chart after the learned interpretation does not resolve it.",
          "James Prinsep chart"
        ]
      ],
      "related": [
        "Claude Sonnet 5 API",
        "brahmiGAN",
        "Brahmi Kaggle dataset"
      ]
    },
    "Qwen local model": {
      "heading": "Two different reasons to use a fallback",
      "cards": [
        [
          "The API is unavailable",
          "Use the Qwen model locally.",
          "Qwen local model"
        ],
        [
          "Brahmi remains unresolved",
          "Consult a James Prinsep chart after the learned interpretation does not resolve it.",
          "James Prinsep chart"
        ]
      ],
      "related": [
        "Claude Sonnet 5 API",
        "brahmiGAN",
        "Brahmi Kaggle dataset"
      ]
    },
    "James Prinsep chart": {
      "heading": "Two different reasons to use a fallback",
      "cards": [
        [
          "The API is unavailable",
          "Use the Qwen model locally.",
          "Qwen local model"
        ],
        [
          "Brahmi remains unresolved",
          "Consult a James Prinsep chart after the learned interpretation does not resolve it.",
          "James Prinsep chart"
        ]
      ],
      "related": [
        "Claude Sonnet 5 API",
        "brahmiGAN",
        "Brahmi Kaggle dataset"
      ]
    },
    "CNN · FNN · PINN · PINO": {
      "heading": "Our AI components, supported by image preparation",
      "cards": [
        [
          "Gaussian blur",
          "Smooth local variations and reduce noise.",
          "Gaussian blur"
        ],
        [
          "CLAHE",
          "Enhance local contrast in faint areas.",
          "CLAHE"
        ],
        [
          "Sobel Scale filter",
          "Expose edge and intensity-change information.",
          "Sobel Scale filter"
        ],
        [
          "RTI image creation",
          "Provide views of the surface under changing light.",
          "RTI image creation"
        ]
      ],
      "related": [
        "brahmiGAN",
        "Brahmi Kaggle dataset",
        "Claude Sonnet 5 API"
      ],
      "intro": "CNN, FNN, PINN and PINO are the team’s own supporting AI components. The four image methods below specifically support the CNN."
    },
    "Brahmi recognition support": {
      "heading": "Script-specific support around the AI",
      "cards": [
        [
          "brahmiGAN",
          "Brahmi material used in the project’s interpretation workflow.",
          "brahmiGAN"
        ],
        [
          "Brahmi Kaggle dataset",
          "Script-specific data that supports character interpretation.",
          "Brahmi Kaggle dataset"
        ],
        [
          "Our own models",
          "CNN, FNN, PINN and PINO support the AI.",
          "CNN · FNN · PINN · PINO"
        ]
      ],
      "related": [
        "James Prinsep chart",
        "Claude Sonnet 5 API"
      ]
    },
    "brahmiGAN": {
      "heading": "Working with the wider interpretation system",
      "cards": [
        [
          "Script-specific material",
          "Adds Brahmi support alongside the Kaggle dataset.",
          "Brahmi Kaggle dataset"
        ],
        [
          "Model support",
          "Works with the team’s own AI components.",
          "CNN · FNN · PINN · PINO"
        ]
      ],
      "related": [
        "James Prinsep chart"
      ]
    },
    "Brahmi Kaggle dataset": {
      "heading": "Part of the Brahmi support system",
      "cards": [
        [
          "Complementary material",
          "Used alongside brahmiGAN in the project workflow.",
          "brahmiGAN"
        ],
        [
          "Interpretation support",
          "Supports the project’s models and character-reading process.",
          "CNN · FNN · PINN · PINO"
        ]
      ],
      "related": [
        "James Prinsep chart"
      ]
    },
    "Laser-cuttable & CNC outputs": {
      "heading": "Three reusable outputs for museums",
      "cards": [
        [
          "3D model",
          "A digital model of a stone or clay-tablet inscription.",
          "3D stone & tablet models"
        ],
        [
          "Laser-cuttable file",
          "An output for an external laser fabrication workflow.",
          "Laser-cuttable files"
        ],
        [
          "CNC / G-code",
          "Instructions for an external CNC-shield-controlled setup.",
          "CNC / G-code output"
        ]
      ],
      "related": [
        "Topographic creation",
        "Accessible archive app"
      ]
    },
    "3D stone & tablet models": {
      "heading": "Three reusable outputs for museums",
      "cards": [
        [
          "3D model",
          "A digital model of a stone or clay-tablet inscription.",
          "3D stone & tablet models"
        ],
        [
          "Laser-cuttable file",
          "An output for an external laser fabrication workflow.",
          "Laser-cuttable files"
        ],
        [
          "CNC / G-code",
          "Instructions for an external CNC-shield-controlled setup.",
          "CNC / G-code output"
        ]
      ],
      "related": [
        "Topographic creation",
        "Accessible archive app"
      ]
    },
    "Laser-cuttable files": {
      "heading": "Three reusable outputs for museums",
      "cards": [
        [
          "3D model",
          "A digital model of a stone or clay-tablet inscription.",
          "3D stone & tablet models"
        ],
        [
          "Laser-cuttable file",
          "An output for an external laser fabrication workflow.",
          "Laser-cuttable files"
        ],
        [
          "CNC / G-code",
          "Instructions for an external CNC-shield-controlled setup.",
          "CNC / G-code output"
        ]
      ],
      "related": [
        "Topographic creation",
        "Accessible archive app"
      ]
    },
    "CNC / G-code output": {
      "heading": "Three reusable outputs for museums",
      "cards": [
        [
          "3D model",
          "A digital model of a stone or clay-tablet inscription.",
          "3D stone & tablet models"
        ],
        [
          "Laser-cuttable file",
          "An output for an external laser fabrication workflow.",
          "Laser-cuttable files"
        ],
        [
          "CNC / G-code",
          "Instructions for an external CNC-shield-controlled setup.",
          "CNC / G-code output"
        ]
      ],
      "related": [
        "Topographic creation",
        "Accessible archive app"
      ]
    },
    "Ultrasonic or VL53L1X": {
      "heading": "Alternative range-sensing options",
      "cards": [
        [
          "Ultrasonic",
          "Measures distance using the travel time of sound."
        ],
        [
          "VL53L1X",
          "Measures distance using optical time of flight."
        ]
      ],
      "related": [
        "1080p USB camera",
        "LEDs, buzzer & I²C display"
      ]
    },
    "Accessible archive app": {
      "heading": "A connected inscription record",
      "cards": [
        [
          "Meaning",
          "Translation and important inscription information."
        ],
        [
          "Evidence",
          "Captures, metadata and derived outputs stay connected."
        ],
        [
          "Reuse",
          "Records can be revisited, studied and shared."
        ]
      ],
      "related": [
        "Interactive RTI file",
        "3D stone & tablet models",
        "Scan report"
      ]
    },
    "Accessible digital archive": {
      "heading": "Evidence and meaning stay together",
      "cards": [
        [
          "Translation",
          "Save the reading and its meaning with the record."
        ],
        [
          "Important data",
          "Retain the inscription’s context and connected outputs."
        ]
      ],
      "related": [
        "Accessible archive app",
        "Interactive RTI file",
        "Scan report"
      ]
    },
    "A complete scan-to-archive workflow": {
      "workflow": true
    },
    "Laptop computing": {
      "workflow": true
    }
  },
  "evidence": {
    "checked": "6 October 2026",
    "stats": [
      {
        "value": "76,000",
        "label": "Estampages in ASI’s digitisation initiative",
        "context": "Collection scope described on the BharatSHRI programme page. Checked 6 Oct 2026.",
        "source": [
          "ASI · BharatSHRI programme",
          "https://bharatshri.asi.gov.in/BharatShri"
        ]
      },
      {
        "value": "18 teams",
        "label": "Re-copying damaged or missing records",
        "context": "Technical teams reported by BharatSHRI. Checked 6 Oct 2026.",
        "source": [
          "ASI · BharatSHRI programme",
          "https://bharatshri.asi.gov.in/BharatShri"
        ]
      },
      {
        "value": "29,260",
        "label": "Digitised estampages · February 2024",
        "context": "Historical snapshot: out of 67,461 then taken up. This is not a current completion total.",
        "source": [
          "Ministry of Culture · 8 February 2024",
          "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2004107"
        ]
      }
    ]
  },
  "faqs": [
    {
      "category": "The problem",
      "q": "Why preserve inscriptions?",
      "a": [
        "Inscriptions carry evidence of government, donations, trade, belief and daily life. Sometimes they preserve details absent from other sources. ASI highlights a 919 CE inscription at Uttaramērūr that records rules for village-assembly elections.",
        "Preserving the original marks and their context keeps this evidence available for future readers."
      ],
      "sources": [
        [
          "ASI · Epigraphy overview",
          "https://bharatshri.asi.gov.in/AboutEpigraphy"
        ]
      ]
    },
    {
      "category": "The problem",
      "q": "What threatens this evidence?",
      "a": [
        "Weathering and damage can make carved text harder to see. ASI also reports that previously recorded inscriptions can become unavailable after displacement, whitewashing or quarrying.",
        "Punaruttham captures surviving detail without touching the inscription, so its visual record can remain available for analysis."
      ],
      "sources": [
        [
          "ASI · Epigraphy overview",
          "https://bharatshri.asi.gov.in/AboutEpigraphy"
        ]
      ],
      "related": [
        "1080p USB camera",
        "Accessible archive app"
      ]
    },
    {
      "category": "The problem",
      "q": "Is Brahmi a language, and is reading it the same as translating it?",
      "a": [
        "Brahmi is a script: a way of writing. Identifying its characters, transcribing the text and interpreting the underlying language are related but distinct tasks. For example, ASI describes Ashokan records written in Brahmi in the Prakrit language.",
        "Punaruttham keeps captured evidence, proposed readings and translation connected so experts can check the interpretation."
      ],
      "sources": [
        [
          "ASI · Epigraphy overview",
          "https://bharatshri.asi.gov.in/AboutEpigraphy"
        ]
      ],
      "related": [
        "Brahmi Kaggle dataset",
        "Uncertainty & expert corrections"
      ]
    },
    {
      "category": "Evidence & data",
      "q": "How large is the documentation effort?",
      "a": [
        "BharatSHRI describes an initiative covering 76,000 estampages—paper impressions of inscriptions—and reports 18 technical teams re-copying damaged or missing records.",
        "These programme figures illustrate the scale of documentation and care for earlier records. They cover inscriptions across the collection, rather than Brahmi alone."
      ],
      "sources": [
        [
          "ASI · BharatSHRI programme",
          "https://bharatshri.asi.gov.in/BharatShri"
        ],
        [
          "ASI · Estampages",
          "https://bharatshri.asi.gov.in/AboutEstampages"
        ]
      ]
    },
    {
      "category": "Evidence & data",
      "q": "What do the statistics on this poster measure?",
      "a": [
        "They describe ASI’s documentation programme. They are not the total number of inscriptions in India or measurements of Punaruttham’s performance.",
        "The 29,260 digitised figure is a Ministry of Culture snapshot dated 8 February 2024. Its denominator was 67,461 records then taken up. The newer collection figure has a different date and scope, so the figures should not be combined into a present-day completion percentage."
      ],
      "sources": [
        [
          "Ministry of Culture · 8 February 2024",
          "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2004107"
        ],
        [
          "ASI · BharatSHRI programme",
          "https://bharatshri.asi.gov.in/BharatShri"
        ]
      ]
    },
    {
      "category": "Evidence & data",
      "q": "What data supports Punaruttham’s Brahmi interpretation?",
      "a": [
        "We use brahmiGAN and a Brahmi dataset from Kaggle to support the recognition and interpretation system. Our own CNN, FNN, PINN and PINO also support the AI.",
        "The cloud API is one part of this system. The inscription images, prepared views and Brahmi-specific support are essential to the workflow."
      ],
      "related": [
        "brahmiGAN",
        "Brahmi Kaggle dataset",
        "CNN · FNN · PINN · PINO"
      ]
    },
    {
      "category": "Evidence & data",
      "q": "How should a reading or reconstruction be assessed?",
      "a": [
        "Start with the original capture, compare the proposed characters against the visible marks, and let an expert review uncertainty. A plausible-looking reading is not enough on its own.",
        "For Punaruttham, useful evidence includes character-level comparisons, expert-corrected translations, scan repeatability and replica dimensions. Published heritage statistics do not establish these project results."
      ],
      "related": [
        "Uncertainty & expert corrections",
        "Scan report"
      ]
    },
    {
      "category": "Today’s methods",
      "q": "What is the status quo for recording inscriptions?",
      "a": [
        "Current practice already includes field surveys, photography with light directed across the surface, paper impressions, specialist transcription and digital repositories. These methods serve different documentation needs.",
        "Punaruttham brings non-contact capture, complementary image views, interpretation support and reusable outputs together in a rover-based workflow."
      ],
      "sources": [
        [
          "ASI · Inscription documentation",
          "https://bharatshri.asi.gov.in/inscription"
        ],
        [
          "ASI · Estampages",
          "https://bharatshri.asi.gov.in/AboutEstampages"
        ]
      ],
      "related": [
        "Capture orchestration",
        "Laptop computing"
      ]
    },
    {
      "category": "Today’s methods",
      "q": "What is an estampage?",
      "a": [
        "An estampage is a paper impression that records an inscription’s surface detail. These records can be studied and preserved away from the original object.",
        "Punaruttham uses non-contact imaging of the inscription. Its digital outputs complement the broader work of recording and studying inscriptions."
      ],
      "sources": [
        [
          "ASI · Estampages",
          "https://bharatshri.asi.gov.in/AboutEstampages"
        ]
      ],
      "related": [
        "1080p USB camera"
      ]
    },
    {
      "category": "Today’s methods",
      "q": "Why use RTI when we already have photographs?",
      "a": [
        "Reflectance Transformation Imaging combines photographs captured under different light directions into a digital view that can be relit. Changing the light helps reveal fine surface relief that one photograph may not show clearly.",
        "In Punaruttham, the interactive RTI file lets experts adjust light direction and brightness. Each RTI compilation also supports AI analysis."
      ],
      "sources": [
        [
          "Cultural Heritage Imaging · RTI",
          "https://culturalheritageimaging.org/Technologies/RTI/"
        ]
      ],
      "related": [
        "RTI image creation",
        "Interactive RTI file"
      ]
    },
    {
      "category": "Today’s methods",
      "q": "Does AI replace an epigraphist or conservator?",
      "a": [
        "Punaruttham gives experts additional evidence and interpretation support. Specialists still judge ambiguous marks, language, historical context and proposed reconstructions.",
        "Original evidence remains visible, uncertainty can be reviewed, and expert corrections stay connected to the record."
      ],
      "related": [
        "Uncertainty & expert corrections",
        "Accessible archive app"
      ]
    },
    {
      "category": "Our approach",
      "q": "How does a scan move through the system?",
      "a": [
        "A 1080p USB camera records the inscription and the laptop performs the main processing. Range sensing supports positioning; thermal imaging adds another view.",
        "Prepared images and RTI compilations support the AI. The resulting evidence, translation and important data flow into the archive, with RTI, topographic, 3D and fabrication outputs for further use."
      ],
      "related": [
        "1080p USB camera",
        "Laptop computing",
        "Capture orchestration",
        "Accessible archive app"
      ]
    },
    {
      "category": "Our approach",
      "q": "How do the image filters support the CNN?",
      "a": [
        "Gaussian blur helps reduce image noise; CLAHE improves local contrast; the Sobel Scale filter brings out intensity edges. RTI adds views informed by changing illumination.",
        "These support the CNN with complementary representations of the inscription. They are supporting methods, rather than a claim that every capture always uses one fixed filter sequence."
      ],
      "sources": [
        [
          "OpenCV · Image filtering",
          "https://docs.opencv.org/3.4.19/d4/d86/group__imgproc__filter.html"
        ],
        [
          "OpenCV · CLAHE",
          "https://docs.opencv.org/4.13.0/d5/daf/tutorial_py_histogram_equalization.html"
        ]
      ],
      "related": [
        "Gaussian blur",
        "CLAHE",
        "Sobel Scale filter",
        "RTI image creation"
      ]
    },
    {
      "category": "Our approach",
      "q": "What happens when the cloud API does not work?",
      "a": [
        "The laptop normally uses the Claude Sonnet 5 API. If the API is unavailable, a local Qwen model provides the alternative AI route.",
        "This is a fallback for API availability. A difficult Brahmi reading has a separate reference fallback."
      ],
      "related": [
        "Claude Sonnet 5 API",
        "Qwen local model",
        "James Prinsep chart"
      ]
    },
    {
      "category": "Our approach",
      "q": "What if the AI still cannot decipher the Brahmi?",
      "a": [
        "If dataset and model support do not resolve the inscription, the system consults a James Prinsep character chart as an additional decipherment reference.",
        "The chart supports comparison of character forms. Unresolved or damaged text still needs careful review; the evidence and uncertainty remain part of the record."
      ],
      "related": [
        "James Prinsep chart",
        "Uncertainty & expert corrections"
      ]
    },
    {
      "category": "Our approach",
      "q": "What can a museum do with the outputs?",
      "a": [
        "The system creates a 3D model of the inscribed stone or clay tablet, laser-cuttable files and CNC-shield G-code for making replicas. Topographic views support examination of the surface.",
        "A museum can use these digital outputs with a suitable fabrication setup. The interactive RTI file supports close inspection without repeatedly relighting the original."
      ],
      "related": [
        "3D stone & tablet models",
        "Laser-cuttable files",
        "CNC / G-code output",
        "Topographic creation"
      ]
    },
    {
      "category": "Our approach",
      "q": "What goes into the accessible archive?",
      "a": [
        "The archive brings together the translation, important inscription data and associated visual evidence. This connects the interpretation to the object and its scan, instead of leaving only a standalone translated sentence.",
        "The aim is for researchers, museums, students and other visitors to revisit and use the record through a universally accessible app."
      ],
      "related": [
        "Accessible archive app",
        "Scan report",
        "Language & account preferences"
      ]
    },
    {
      "category": "Our approach",
      "q": "Can a reconstruction recover what has completely disappeared?",
      "a": [
        "A reconstruction can propose a missing shape or reading from the surviving evidence and supporting references. A proposal is different from an observed mark on the original.",
        "Punaruttham keeps proposed reconstruction distinguishable from captured evidence so museum replicas and interpretations can be reviewed in context."
      ],
      "related": [
        "3D stone & tablet models",
        "Uncertainty & expert corrections"
      ]
    }
  ]
};
