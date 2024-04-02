""" Xml utils for the core applications
    Override of some functions in core_main_app.utils.xml
"""
import json
import logging
from collections import OrderedDict
from urllib.parse import urlparse

import xmltodict
from django.urls import reverse

import core_main_app.commons.exceptions as exceptions
import xml_utils.commons.constants as xml_utils_constants
import xml_utils.xml_validation.validation as xml_validation
from core_main_app.commons.exceptions import XMLError
from core_main_app.settings import XERCES_VALIDATION, SERVER_URI
from core_main_app.utils.resolvers.resolver_utils import lmxl_uri_resolver
from core_main_app.utils.urls import get_template_download_pattern
from xml_utils.commons.constants import XSL_NAMESPACE
from xml_utils.xsd_hash import xsd_hash
from xml_utils.xsd_tree.operations.namespaces import get_namespaces
from xml_utils.xsd_tree.xsd_tree import XSDTree

logger = logging.getLogger(__name__)

def xsl_transform(xml_string, xslt_string, **kwargs):
    """Apply transformation to xml, allowing for parameters to the XSLT

    Args:
        xml_string:
        xslt_string:
        kwargs : dict
            Other keyword arguments are passed as parameters to the XSLT object

    Returns:

    """
    try:
        # print(f"xsl_transform - xml_string: {xml_string}")
        # print(f"xsl_transform - xslt_string: {xslt_string}")
        print(f"xsl_transform - kwargs: {kwargs}")
        # Build the XSD and XSLT etrees
        xslt_tree = XSDTree.build_tree(xslt_string)
        xsd_tree = XSDTree.build_tree(xml_string)

        print(f"xsl_transform - xslt_tree: {xslt_tree}")
        print(f"xsl_transform - xsd_tree: {xsd_tree}")

        # Get the XSLT transformation and transform the XSD
        transform = XSDTree.transform_to_xslt(xslt_tree)   # etree.XSLT object
        print(f"xsl_transform - transform: {transform}")
        transformed_tree = transform(xsd_tree, **kwargs)
        print(f"xsl_transform - transformed_tree: {transformed_tree}")
        return str(transformed_tree)
    except Exception:
        raise exceptions.CoreError("An unexpected exception happened while transforming the XML")
