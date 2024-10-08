export const VERSION_DETAILS = [
    {
        "version": "1.11.8",
        "date": "October 8, 2024",
        "added": [],
        "changed": [
            "Removed all json files and replaced them with database entries",
            "Affaire Module: Added a form array as 'criteres d'attribution'"
        ],
        "fixed": [
            "Affaire Module: document can not be saved (logo, t-label, ...)",
            "Affaire Module: Only unlock \"send email\" once the affaire has been saved",
            "Affaire Module: project not being saved correctly"
        ],
    },
    {
        "version": "1.9.5",
        "date": "October 2, 2024",
        "added": [
            "Client Module: Updated client preview to include a data table of available contact people",
            "Affaire Module: Implemented 'Repondre a un appel d'offre'",
            "Client Module: SAV handling per affaire",
            "Client Module: Added a progress bar to indicate profile data completion",
        ],
        "changed": [
            "Client Module: Display sales full name on assignment dialog",
            "Client Module: Display client's addresses on preview section",
            "Clients Module: Updated the account activation Email template",
            "Root Module: Removed sign up button and privated the route",
            "Clients Module:; Redirect on client save"
        ],
        "fixed": [
            "Client Module: Refactored the route guard to handle client access correctly",
            "Client Module: Removed unecessary tabs (used for testing)",
            "Client's Module: Fixed pre-populated client form",
            "Affaire Module: Added unique constraint for project name (per client)",
            "Affaire Module: Disabled action buttons while affaire is still being created"
        ],
    },
    {
        "version": "1.0.0",
        "date": "September 20, 2024",
        "added": [
            "Clients Module",
            "",
            "----- List all available clients",
            "----- Delete existing clients",
            "----- List client's orders",
            "----- List client's contact people",
            "----- List client's documents (rapport de visite, ...)",
            "----- Update client's data",
            "-------- Manage contact people",
            "-------- Manage rapport de visite",
            "-------- Update client's survey (qualité)",
            "----- Assign client to sales agent",
            "----- Activate/Deactivate CMS access",
            "----- Activate/Deactivate contact person account",
            "",

            "Affaire Module",
            "",
            "----- List available affaire created by authenticated sales agent",
            "----- List affaire related to assigned clients",
            "----- Create new orders for specific clients (default expiration date set to 30 days)",
            "-------- Manage clients' projects",
            "-------- Manage articles (oer color per size)",
            "-------- Checkout page to manage client's additinal info (address, contact person, dates, ...)",
            "----- Notify client via Email",
            "-------- Customize email template with header and footer text",
            "-------- Select which contact person to be notified",
            "-------- Re-send confirmation email any time",
            "",

            "Root Module",
            "",
            "----- Allow sales to authenticate using already created credentials",
            "----- Allow guest users to request accounts (sign up)",
            "-------- Add guest users as additional contact to already existing company (based on matching tax_id)",
            "----- Necessary boilerplate to structure the overall layout of the application",
            "-------- Routing",
            "-------- Shared elements between modules"
        ],
        "changed": [],
        "fixed": [],
    },
];
