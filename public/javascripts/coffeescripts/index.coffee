log = console.log.bind(console)


#############################################
#  CANVAS MANAGER
#############################################
window.CanvasManager =
	mutex: false
	ctx: null
	canvas: null
	height: 0
	width: 0
	inside: false
	sectionOffsets: []
	initCanvas: (id,sections)->
		@canvasBrushView = new window.CanvasBrushView(
			el:$("##{id}")
			id: id
			sections:sections
		)
	cleanCanvas:->
		@canvasBrushView.clean()
	duplicateLinks:->
		$('#sections a').each(->
			link = $(@).clone()
			top = $(@).offset().top
			left = $(@).offset().left
			$(link).css('top',top)
			$(link).css('left',left)
			$(link).css('position','absolute')
			$(link).addClass('absolute_link')
			$('body').append($(link))
		)
	scrollArrowEffect:->
		self = this
		log self.sectionsArray
		bodyheight = $('body').outerHeight()
		$('#arrow').click(->
			if $(@).hasClass('arrow_rotated')
				 $('body').animate({scrollTop:0},500)
			else
				bodyTop = $('body').scrollTop()
				windowScroll = bodyTop + $(window).outerHeight()
				arrowOffset = $(@).offset().top
				for s in self.sectionsArray
					if bodyTop <= s.offset[0]  and s.offset[1] <= windowScroll
						$('body').animate({scrollTop:s.offset[1]},500)
						break
					else if s.offset[0] <= arrowOffset <= s.offset[1]
						if s.offset[0] is bodyTop
							$('body').animate({scrollTop:s.offset[1]},500)
						else
							$('body').animate({scrollTop:s.offset[0]},500)
						break
		)
		$(document).scroll(->
			scrolled = $(window).outerHeight() + $('body').scrollTop()
			if scrolled is bodyheight
				$('#arrow').addClass('arrow_rotated')
			else
				$('#arrow').removeClass('arrow_rotated')
		)
	init: ()->
		self = this
		i = 0
		colors = [
			[0,0,0],
			[250,250,250],
			[250,250,250],
			[250,250,250],
			[250,250,250],
			[250,250,250],
			[250,250,250],
			[250,250,250],
			[0,0,0],
			[0,0,0]
		]
		self.sectionsArray =[]
		self.sectionsArray.push({'id':$('header').attr('id'),'color':colors[i],'offset':[$(header).offset().top,$(header).offset().top+$(header).outerHeight()]})
		i++
		$('section').each(->
			self.sectionsArray.push({'id':$(@).attr('id'),'color':colors[i],'offset':[$(@).offset().top,$(@).offset().top+$(@).outerHeight()]})
			i++
		)
		@initCanvas('bg',self.sectionsArray)
		$('#clean').click(->
			self.cleanCanvas()
		)
		@duplicateLinks()
		@scrollArrowEffect()

$(document).ready(->
	window.CanvasManager.init()
)
