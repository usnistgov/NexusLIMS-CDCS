NexusLIMS-CDCS
--------------

About this repository
+++++++++++++++++++++

This repository holds a fork of the `"Materials Data Curation System (MDCS)" <https://github.com/usnistgov/mdcs/>`_
that has been customized for use as part of the `NexusLIMS <https://github.com/usnistgov/NexusLIMS>`_ laboratory information management system (see the
`published manuscript <https://doi.org/10.1017/S1431927621000222>`_ for the background motivation). This repository
contains the "front-end" system that gives users access to experimental XML records built by the 
`NexusLIMS backend <https://github.com/usnistgov/NexusLIMS>`_.

The software was developed by the National Institute of Standards and Technology (NIST), and the standard NIST license
and disclaimer apply (see the ``LICENSE.txt`` file for details).

Updates
+++++++

In general, the NexusLIMS developers strive to keep this code up-to-date with the "upstream" version of
`MDCS <https://github.com/usnistgov/mdcs>`_, although it may lag behind by a version or two at times due to the
development effort required to integrate upstream changes.

Installation
++++++++++++

It is recommended to deploy this application as described in the
`NexusLIMS Docker Deployment <https://github.com/usnistgov/nexuslims-cdcs-docker>`_ repository. For further details and
suggestions for deployment, please see that repository.

Values to customize
+++++++++++++++++++

A few values in this code have placeholders in order to make it less-specific to the NIST deployment environment. As
a result, there are a couple places where values should be changed (either by the Docker deployment scripts, or
manually) in order to get a working installation. The following table (potentially non-exhaustive) contains values you
should or might want to change in order to customize the application to your specific needs:

+--------------------------------+-------------------------+-----------------------------------------------------------+
|                           File | Value to Change         | Notes                                                     |
+================================+=========================+===========================================================+
| ``xslt/detail_stylesheet.xsl`` | ``datasetBaseUrl``      | This ``<xsl:variable>`` value (and the others below) are  |
|                                |                         | used to control the target of certain links on the HTML   |
|                                |                         | conversion of the XML (which uses one of the XSLT files). |
|                                |                         | ``datasetBaseUrl`` should be a web-accessible path to the |
|                                |                         | root of the file structure (i.e. all ``location`` nodes   |
|                                |                         | within a record's XML will be appended to                 |
|                                |                         | ``datasetBaseUrl`` to generate download links for the     |
|                                |                         | individual files).                                        |
+--------------------------------+-------------------------+-----------------------------------------------------------+
| ``xslt/detail_stylesheet.xsl`` | ``previewBaseUrl``      | Like above, but used with ``preview`` nodes to locate the |
|                                |                         | preview images that will be shown on the "detail view"    |
|                                |                         | page. This could be the same as ``datasetBaseUrl`` if     |
|                                |                         | the files are all in the same location, but is separated  |
|                                |                         | out to provide flexibility.                               |
+--------------------------------+-------------------------+-----------------------------------------------------------+
| ``xslt/detail_stylesheet.xsl`` | ``sharepointBaseUrl``   | Mostly deprecated, but if using the older-style           |
|                                |                         | SharePoint harvester, the web-accessible path to the      |
|                                |                         | ``Lists`` page of the Sharepoint site should be given     |
|                                |                         | in this variable value. Can be safely left blank if not   |
|                                |                         | using the SharePoint harvester (which no one should be,   |
|                                |                         | at this point).                                           |
+--------------------------------+-------------------------+-----------------------------------------------------------+
| ``xslt/detail_stylesheet.xsl`` | ``instr-color-          | This portion of the XSLT should be customized with your   |
|                                | dictionary``            | own instruments' PID values, and whatever colors you      |
|                                |                         | would like to be used for the display badges when that    |
|                                |                         | instrument is found. These PIDs correspond to the ``pid`` |
|                                |                         | attribute in the ``summary/instrument`` node of the       |
|                                |                         | built XML records.                                        |
+--------------------------------+-------------------------+-----------------------------------------------------------+
| ``xslt/detail_stylesheet.xsl`` | ``sharepoint-           | This is a deprecated holdover from the formerly used      |
|                                | instrument-dictionary`` | SharePoint calendar harvester, but it allows you to map   |
|                                |                         | instrument "display names" to specific calendar pages     |
|                                |                         | on the SharePoint site. Since most people will not be     |
|                                |                         | using SharePoint for calendaring, these values most       |
|                                |                         | likely can be safely deleted.                             |
+--------------------------------+-------------------------+-----------------------------------------------------------+
| ``xslt/list_stylesheet.xsl``   | ``datasetBaseUrl``      | Same as for in ``xslt/detail_stylesheet.xsl``             |
+--------------------------------+-------------------------+-----------------------------------------------------------+
| ``xslt/list_stylesheet.xsl``   | ``previewBaseUrl``      | Same as for in ``xslt/detail_stylesheet.xsl``             |
+--------------------------------+-------------------------+-----------------------------------------------------------+
| ``mdcs/settings.py``           | ``DOCUMENTATION_LINK``  | Set this value to a web-accessible documentation          |
|                                |                         | location. The link will be used to add a menu item        |
|                                |                         | to the navigation bar to allow easy access to the         |
|                                |                         | documentation pages.                                      |
+--------------------------------+-------------------------+-----------------------------------------------------------+
| ``mdcs_home/menus.py``         | Various                 | In ``menus.py``, there are multiple ``Menu.add_item()``   |
|                                | ``Menu.add_item(...)``  | calls that should be customized to reflect whatever       |
|                                | lines                   | links and icons you would like to show up in the top      |
|                                |                         | navigation bar. In the NIST deployment, these lines       |
|                                |                         | provide links to the NEMO reservation system and the      |
|                                |                         | EM Nexus shared file system, but they can be customized   |
|                                |                         | as dictated by the specific deployment's needs. Note,     |
|                                |                         | after changing any of these, you'll need to also update   |
|                                |                         | ``static/js/menu-custom.js`` if you want the tutorial     |
|                                |                         | to work properly by updating link IDs and the tutorial    |
|                                |                         | text.                                                     |
+--------------------------------+-------------------------+-----------------------------------------------------------+
| ``static/js/menu-custom.js``   | Tutorial steps defined  | This javascript file defines the "steps" of a guided      |
|                                | in ``create_tour()``    | tutorial. Since some of those steps are specific to       |
|                                | function                | the NIST deployment, this tutorial should be reconfigured |
|                                |                         | for your own environment if you desire.                   |
+--------------------------------+-------------------------+-----------------------------------------------------------+
| ``templates/theme/menu.html``  | ``#cdcs-menu-title``    | If you want to change the logo in the top menu bar,       |
|                                |                         | this is where you would do so                             |
+--------------------------------+-------------------------+-----------------------------------------------------------+
| ``templates/core_main_app/     | All the text            | This template page controls the text on the NexusLIMS     |
| user/homepage.html``           |                         | CDCS homepage, and so it should be customized to meet     |
|                                |                         | your deployment's specific needs. Likewise, you could     |
|                                |                         | change the NexusLIMS logo here to something more          |
|                                |                         | appropriate for your deployment.                          |
+--------------------------------+-------------------------+-----------------------------------------------------------+


## About the developers

NexusLIMS-CDCS repo is being developed and maintained by: 

- [June Lau](https://www.nist.gov/people/june-w-lau) - Research Data and Computing Office - Project Lead
- [Hamza Bouhanni](https://www.nist.gov/people/hamza-bouhanni) - Prometheus Computing
- [Gretchen Greene](https://www.nist.gov/people/gretchen-greene) - Research Data and Computing Office
- [Michael Katz](https://www.nist.gov/people/michael-katz) - Material Data Division
- [Benjamin Long](https://www.nist.gov/people/benjamin-long) - Applied AI Research Group
- [Marcus Newrock](https://www.nist.gov/people/marcus-william-newrock) - Material Data Division
- [Ray Plante](https://www.nist.gov/people/raymond-plante) - Research Data and Computing Office
- [Ryan White](https://www.nist.gov/people/ryan-white) - Applied Chemicals and Materials Division 

Past developers:

- Yannick Congo - Former staff memeber
- Joshua Taillon - Former staff member
