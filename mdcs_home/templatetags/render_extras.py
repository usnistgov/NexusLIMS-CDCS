from django import template
from django.template import Template, Variable, TemplateSyntaxError

register = template.Library()


class RenderAsTemplateNode(template.Node):
    def __init__(self, item_to_be_rendered):
        self.item_to_be_rendered = Variable(item_to_be_rendered)

    def render(self, context):
        # import web_pdb; web_pdb.set_trace(port=3000)

        try:
            actual_item = self.item_to_be_rendered.resolve(context)
            return Template(actual_item).render(context)
        except template.VariableDoesNotExist:
            return ""


@register.tag(name="render_as_template")
def render_as_template(parser, args):
    content = args.split_contents()
    if len(content) != 2:
        raise TemplateSyntaxError("'%s' takes two arguments"
                                  " (a variable representing a template to"
                                  " render, and a link to the result)" % content[0])

    return RenderAsTemplateNode(content[1])
