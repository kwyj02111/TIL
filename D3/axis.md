# 축 관련 v3 VS v4

### 1. d3.scale.linear() => d3.scaleLinear()


        d3.scale.linear() => d3.scaleLinear()
        d3.scale.ordinal() => d3.scaleOrdinal() 으로 변경되었다.


### 2. scale 관련 변경


d3 v3에서 아래와 같이 썼던 코드는

        var x = d3.scale.ordinal()
        .domain(["a", "b", "c"])
        .rangePoints([0, width]);


d3 v4에서 아래코드로 해야한다.

        var x = d3.scalePoint()
        .domain(["a", "b", "c"])
        .range([0, width]);


### 3. 축의 시작점 관련

d3 v3에서 아래와 같이 썼던 코드는

        var xAxis = d3.svg.axis().orient('bottom')


v4에서는 한번에 쓸 수 있게 되었다.

        var xAxis = d3.axisBottom()


right, left, bottom, top 모두 가능하다.


### 4. tick 이름 변경

        innerTickSize => tickSizeInner
        outerTickSize => tickSizeOuter 으로 변경되었다.