## ScrollView-vs-FlatList-React-Native
### ScrollView vs FlatList in React Native. Which one to choose?

### ScrollView :

ScrollView must have a bounded height in order to work
ScrollView simply renders all its react child components at ONCE.
Dont' use If you have very long list of items
So Now FlatList comes in picture

### FlatList :

FlatList renders items lazily, just when they are about to appear,
and removes items that scroll way off screen to save MEMPRY and PROCESSING TIME.
FlatList is also handy if you want to render separators between your items, 
multiple columns, infinite scroll loading, or any number of other features it supports out of the box.

so use accordingly..

### some snapshots:

![screenshot_20190305-004318](https://user-images.githubusercontent.com/26687042/53758142-376e8900-3ee3-11e9-8039-0de61c417027.png)

![screenshot_20190305-004330](https://user-images.githubusercontent.com/26687042/53758149-3a697980-3ee3-11e9-84c7-547a6595efc0.png)

![screenshot_20190305-004349](https://user-images.githubusercontent.com/26687042/53758155-3e959700-3ee3-11e9-9de6-8900c0af2a6c.png)

![screenshot_20190305-004421](https://user-images.githubusercontent.com/26687042/53758163-405f5a80-3ee3-11e9-9dc2-615496e17358.png)


Happing CodingS
