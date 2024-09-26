export const VERSION_DETAILS = [
    {
        "version": "1.7.3",
        "date": "WIP",
        "added": [
            "Sales area: update client preview to include a data table",
            "Repondre a un appel d'offre"
        ],
        "changed": [
            "Sales area: Display sales full name on assignment dialog",
            "Client view: Displaying client's addresses",
            "Credentials Email: Updated the account activation email template",
            "Removed sign up button and privated the route",
            "Redirect on client save"
        ],
        "fixed": [
            "Client area guard;",
            "Removed unecessary tabs for clients view;",
            "Client's form pre-populated fields;"
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
