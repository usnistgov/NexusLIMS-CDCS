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

  * Help menu

    * API Documentation
    * Contact
    * Help
"""

from django.core.urlresolvers import reverse
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
             icon="search")
)

Menu.add_item(
    "nodropdown",
    MenuItem("Sharepoint Calendar", 
             "https://mmlshare.nist.gov/Div/msed/MSED-MMF/default.aspx",
             icon="calendar")
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
    "dashboard", MenuItem("My Workspaces", reverse('core_dashboard_workspaces'), icon="folder-open")
)

Menu.add_item(
    "dashboard", MenuItem("My {0}s".format(get_data_label().title()), reverse('core_dashboard_records'),
                          icon="file-text-o")
)

Menu.add_item(
    "dashboard", MenuItem("My {0}s".format(get_form_label().title()), reverse('core_dashboard_forms'), icon="file-text-o")
)

Menu.add_item(
    "dashboard", MenuItem("My Files", reverse('core_dashboard_files'), icon="file")
)

Menu.add_item(
    "nodropdown", MenuItem("Tutorial", 
                     "#",
                     icon="question-circle")
)

Menu.add_item(
    "help", MenuItem("NexusLIMS Documentation", 
                     DOCUMENTATION_LINK,
                     icon="book")
)

Menu.add_item(
    "help", MenuItem("API Documentation", reverse("swagger_view"), icon="cogs")
)

# Menu.add_item(
#     "help", MenuItem("Contact", reverse("core_website_app_contact"), icon="envelope")
# )