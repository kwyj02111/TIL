# attr 관련 v3 VS v4

        .attr({
            'id': graphID,
            'class' : 'svg',
            'width': graphWidth,
            'height': graphHeight
        })

v3에서는 위의 코드가 가능한데 v4에서는 다르게 해줘야 한다.


이렇게 다 따로따로 써주거나,


        .attr('id', graphID)
        .attr('class', 'svg')
        .attr('width', graphWidth)
        .attr('height', graphHeight)


d3-selection-multi를 사용해야 한다.


        import 'd3-selection-multi' 추가 후,

        .attrs({
            'id': graphID,
            'class' : 'svg',
            'width': graphWidth,
            'height': graphHeight
        )}


참고 > https://github.com/d3/d3-selection-multi