""" Menu configuration for mdcs. The following menus are displayed:

  * No dropdown menu

    * Home
    * Data Curation

  * Data Exploration menu

    * Search by Keyword
    * Build a Custom Query

  * Composer menu

    * Create New Template
    * My Templates
    * My Types

  * Dashboard menu

    * My Workspaces
    * My Records
    * My Forms
    * My Files
    * My Queries

  * Help menu

    * API Documentation
    * Contact
    * Help
"""

from django.urls import reverse
from menu import Menu, MenuItem

from core_main_app.utils.labels import get_form_label, get_data_label
from mdcs.settings import CURATE_MENU_NAME
from mdcs.settings import DOCUMENTATION_LINK

# Menu.add_item(
#     "nodropdown", MenuItem("Home", reverse("core_main_app_homepage"), icon="home")
# )

# Menu.add_item(
#     "nodropdown", MenuItem("Create a Record", reverse("core_curate_index"))
# )
Menu.add_item(
    "nodropdown", 
    MenuItem("Browse and Search Records", 
             reverse("core_explore_keyword_app_search"),
             icon="search",
             iconClass="fas")
)

Menu.add_item(
    "nodropdown",
    MenuItem("MARLIN",
             "https://marlin.nist.gov",
             icon="fish",
             iconClass="fas")
)

Menu.add_item(
    "nodropdown",
    MenuItem("NEMO",
             "https://nemo.nist.gov",
             icon="fish",
             iconClass="fas")
)

Menu.add_item(
    "nodropdown",
    MenuItem("EM Community SharePoint",
             "https://nistgov.sharepoint.com/sites/microscopy/",
             icon="users",
             iconClass="fas")
)

Menu.add_item(
    "nodropdown",
    MenuItem("NexusLIMS Data Stats",
             "http://limsimages.campus.nist.gov:5000",
             icon="chart-line",
             iconClass="fas")
)

# Menu.add_item(
#     "explorer", MenuItem("Build a Custom Query", reverse("core_explore_example_index"))
# )

# Menu.add_item(
#     "composer", MenuItem("Create New Template", reverse("core_composer_index"))
# )

# Menu.add_item(
#     "composer", MenuItem("My Templates", reverse("core_dashboard_templates"), require_authentication=True)
# )

# Menu.add_item(
#     "composer", MenuItem("My Types", reverse("core_dashboard_types"), require_authentication=True)
# )

Menu.items["dashboard"] = []
Menu.add_item(
    "dashboard",
    MenuItem("My Workspaces", reverse("core_dashboard_workspaces"), icon="folder-open", iconClass="fas"),
)

Menu.add_item(
    "dashboard",
    MenuItem(
        "My {0}s".format(get_data_label().title()),
        reverse("core_dashboard_records"),
        icon="file-alt",
        iconClass="fas"
    ),
)

Menu.add_item(
    "dashboard",
    MenuItem(
        "My {0}s".format(get_form_label().title()),
        reverse("core_dashboard_forms"),
        icon="file-alt",
        iconClass="fas"
    ),
)

Menu.add_item(
    "dashboard", MenuItem("My Files", reverse("core_dashboard_files"), icon="file-alt", iconClass="fas")
)

Menu.add_item(
    "dashboard",
    MenuItem("My Queries", reverse("core_dashboard_queries"), icon="search"),
)

Menu.add_item(
    "nodropdown", MenuItem("Tutorial", 
                     "#",
                     icon="question-circle",
                     iconClass="fas")
)

Menu.add_item(
    "help", MenuItem("NexusLIMS Documentation", 
                     DOCUMENTATION_LINK,
                     icon="book",
                     iconClass="fas")
)

Menu.add_item(
    "help", MenuItem("API Documentation", reverse("swagger_view"), icon="cogs", iconClass="fas")
)

# Menu.add_item(
#     "help", MenuItem("Contact", reverse("core_website_app_contact"), icon="envelope")
# )
