(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{583:function(r,e,v){"use strict";v.r(e);var _=v(4),t=Object(_.a)({},(function(){var r=this,e=r.$createElement,v=r._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[v("blockquote",[v("p",[v("a",{attrs:{href:"https://github.com/apache/rocketmq/tree/master/docs/cn",target:"_blank",rel:"noopener noreferrer"}},[r._v("参考文档"),v("OutboundLink")],1),r._v("、"),v("a",{attrs:{href:"https://github.com/apache/rocketmq-spring",target:"_blank",rel:"noopener noreferrer"}},[r._v("spring demo"),v("OutboundLink")],1)])]),r._v(" "),v("h3",{attrs:{id:"基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[r._v("#")]),r._v(" 基本概念")]),r._v(" "),v("ul",[v("li",[r._v("RocketMQ主要由 Producer、Broker、Consumer 三部分组成，其中Producer 负责生产消息，Consumer 负责消费消息，Broker 负责存储消息。")]),r._v(" "),v("li",[r._v("实际部署过程中，一个Broker对应一台服务器，多个组成集群。")]),r._v(" "),v("li",[r._v("每个 Broker 可以存储多个Topic的消息，每个Topic的消息也可以分片存储于不同的 Broker。")])]),r._v(" "),v("h4",{attrs:{id:"代理服务器-broker-server"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代理服务器-broker-server"}},[r._v("#")]),r._v(" 代理服务器（Broker Server）")]),r._v(" "),v("p",[r._v("Broker负责存储消息、转发消息。代理服务器在RocketMQ系统中负责接收从生产者发送来的消息并存储、同时为消费者的拉取请求作准备。代理服务器也存储消息相关的元数据，包括消费者组、消费进度偏移和主题和队列消息等。")]),r._v(" "),v("h4",{attrs:{id:"名字服务-name-server"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#名字服务-name-server"}},[r._v("#")]),r._v(" 名字服务（Name Server）")]),r._v(" "),v("p",[r._v("充当路由消息的提供者。生产者或消费者能够"),v("strong",[r._v("通过名字服务查找各主题相应的Broker IP列表")]),r._v("。多个Namesrv实例组成集群，但相互独立，没有信息交换。")]),r._v(" "),v("h4",{attrs:{id:"消息-message"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息-message"}},[r._v("#")]),r._v(" 消息（Message）")]),r._v(" "),v("p",[r._v("消息系统所传输信息的物理载体，生产和消费数据的最小单位，"),v("strong",[r._v("每条消息必须属于一个主题")]),r._v("。")]),r._v(" "),v("ul",[v("li",[r._v("唯一的Message ID，用于查询消息。")]),r._v(" "),v("li",[r._v("业务标识，Key，可选，用于查询消息。")]),r._v(" "),v("li",[r._v("分类标签，Tag，可选，用于业务分类")])]),r._v(" "),v("h4",{attrs:{id:"主题-topic"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主题-topic"}},[r._v("#")]),r._v(" 主题（Topic）")]),r._v(" "),v("p",[r._v("表示一类消息的集合，"),v("strong",[r._v("每个主题包含若干条消息")]),r._v("，是消息订阅的基本单位。")]),r._v(" "),v("h4",{attrs:{id:"消息生产者-producer"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息生产者-producer"}},[r._v("#")]),r._v(" 消息生产者（Producer）")]),r._v(" "),v("p",[r._v("负责生产消息，RocketMQ提供"),v("strong",[r._v("同步发送、异步发送、顺序发送、单向发送")]),r._v("。")]),r._v(" "),v("h4",{attrs:{id:"生产者组-producer-group"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生产者组-producer-group"}},[r._v("#")]),r._v(" 生产者组（Producer Group）")]),r._v(" "),v("p",[r._v("同一类Producer的集合，发送同一类消息且发送逻辑一致。如果发送的是事务消息且原始生产者在发送之后崩溃，则Broker服务器会联系同一生产者组的其他生产者实例以提交或回溯消费。")]),r._v(" "),v("h4",{attrs:{id:"消息消费者-consumer"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息消费者-consumer"}},[r._v("#")]),r._v(" 消息消费者（Consumer）")]),r._v(" "),v("p",[r._v("负责消费消息，一般是后台系统负责异步消费。")]),r._v(" "),v("h4",{attrs:{id:"消费者组-consumer-group"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消费者组-consumer-group"}},[r._v("#")]),r._v(" 消费者组（Consumer Group）")]),r._v(" "),v("p",[r._v("同一类Consumer的集合，消费同一类消息且消费逻辑一致。"),v("strong",[r._v("必须订阅完全相同的Topic")]),r._v("。")]),r._v(" "),v("h4",{attrs:{id:"消费形式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消费形式"}},[r._v("#")]),r._v(" 消费形式")]),r._v(" "),v("ul",[v("li",[v("p",[r._v("拉取式消费（Pull Consumer）：应用"),v("strong",[r._v("主动调用方法从Broker服务器拉消息")]),r._v("消费。")])]),r._v(" "),v("li",[v("p",[r._v("推动式消费（Push Consumer）：Broker收到数据后会"),v("strong",[r._v("主动推送给消费端")]),r._v("，实时性较高。")])])]),r._v(" "),v("h4",{attrs:{id:"消费模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消费模式"}},[r._v("#")]),r._v(" 消费模式")]),r._v(" "),v("ul",[v("li",[v("p",[r._v("集群消费（Clustering）：相同Consumer Group的每个Consumer实例"),v("strong",[r._v("平均分摊消息")]),r._v("。")])]),r._v(" "),v("li",[v("p",[r._v("广播消费（Broadcasting）：相同Consumer Group的每个Consumer实例"),v("strong",[r._v("都接收全量的消息")]),r._v("。")])]),r._v(" "),v("li",[v("p",[r._v("普通顺序消费模式：通过同一个消费队列收到的消息是有顺序的，不同消息队列收到的消息则可能是无顺序的")])]),r._v(" "),v("li",[v("p",[r._v("严格顺序消息模式：消费者收到的所有消息均是有顺序的。")])])]),r._v(" "),v("h3",{attrs:{id:"特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[r._v("#")]),r._v(" 特性")]),r._v(" "),v("h4",{attrs:{id:"订阅与发布"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#订阅与发布"}},[r._v("#")]),r._v(" 订阅与发布")]),r._v(" "),v("ul",[v("li",[r._v("消息的发布：某个生产者向某个topic发送消息。")]),r._v(" "),v("li",[r._v("消息的订阅：某个消费者关注了某个topic中带有某些tag的消息，进而从该topic消费数据。")])]),r._v(" "),v("h4",{attrs:{id:"消息顺序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息顺序"}},[r._v("#")]),r._v(" 消息顺序")]),r._v(" "),v("p",[r._v("消息有序指的是一类消息消费时，能按照发送的顺序来消费。RocketMQ可以严格的保证消息有序。")]),r._v(" "),v("ul",[v("li",[r._v("全局顺序：是指某个Topic下的所有消息都要保证顺序，"),v("strong",[r._v("所有消息按照严格的先入先出（FIFO）的顺序进行发布和消费")]),r._v("。适用场景：性能要求不高。")]),r._v(" "),v("li",[r._v("分区顺序：指定一个 Topic，所有消息根据 sharding key 进行区块分区。 "),v("strong",[r._v("同一个分区内的消息按照严格的 FIFO 顺序进行发布和消费。")]),r._v(" Sharding key 是顺序消息中用来区分不同分区的关键字段，和普通消息的 Key 是完全不同的概念。 适用场景：性能要求高。")])]),r._v(" "),v("h4",{attrs:{id:"消息过滤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息过滤"}},[r._v("#")]),r._v(" 消息过滤")]),r._v(" "),v("p",[r._v("消费者可以根据标签（Tag）进行消息过滤，也支持自定义属性过滤。")]),r._v(" "),v("ul",[v("li",[r._v("消息过滤目前是在Broker端实现的")]),r._v(" "),v("li",[r._v("优点是减少了对于Consumer无用消息的网络传输")]),r._v(" "),v("li",[r._v("缺点是增加了Broker的负担、而且实现相对复杂。")])]),r._v(" "),v("h4",{attrs:{id:"消息可靠性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息可靠性"}},[r._v("#")]),r._v(" 消息可靠性")]),r._v(" "),v("p",[r._v("RocketMQ支持消息的高可靠，影响消息可靠性的几种情况：")]),r._v(" "),v("ul",[v("li",[v("p",[r._v("硬件资源可立即恢复。")]),r._v(" "),v("ol",[v("li",[r._v("Broker非正常关闭")]),r._v(" "),v("li",[r._v("Broker异常Crash")]),r._v(" "),v("li",[r._v("OS Crash")]),r._v(" "),v("li",[r._v("机器掉电，但是能立即恢复供电情况")])]),r._v(" "),v("blockquote",[v("p",[r._v("MQ能保证消息不丢，或者丢失少量数据，依赖刷盘方式（数据备份还原）。")])])]),r._v(" "),v("li",[v("p",[r._v("单点故障，且无法恢复，单点上的消息全部丢失。")]),r._v(" "),v("ol",[v("li",[r._v("机器无法开机（可能是cpu、主板、内存等关键设备损坏）")]),r._v(" "),v("li",[r._v("磁盘设备损坏")])]),r._v(" "),v("blockquote",[v("p",[r._v("MQ通过"),v("strong",[r._v("异步复制，可保证99%的消息不丢")]),r._v("，且通过"),v("strong",[r._v("同步双写技术可以完全避免单点丢失")]),r._v("，同步双写势必会影响性能，适合对消息可靠性要求极高的场合")])])])]),r._v(" "),v("h4",{attrs:{id:"至少一次"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#至少一次"}},[r._v("#")]),r._v(" 至少一次")]),r._v(" "),v("p",[r._v("至少一次(At least Once)指每个消息必须投递一次。Consumer先Pull消息到本地，消费完成后，才向服务器返回ack，如果没有消费一定不会ack消息，所以RocketMQ可以很好的支持此特性。")]),r._v(" "),v("h4",{attrs:{id:"回溯消费"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回溯消费"}},[r._v("#")]),r._v(" 回溯消费")]),r._v(" "),v("p",[r._v("回溯消费是指已经消费成功的消息，需要重新消费。要支持此功能，Broker在向Consumer投递消息后，消息仍然需要保留。支持按照时间回溯消费，如重新消费1小时前的数据，时间维度精确到毫秒。")]),r._v(" "),v("h4",{attrs:{id:"事务消息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事务消息"}},[r._v("#")]),r._v(" 事务消息")]),r._v(" "),v("p",[r._v("RocketMQ事务消息是指应用本地事务和发送消息操作可以被定义到全局事务中，要么同时成功，要么同时失败。RocketMQ的事务消息提供类似 X/Open XA 的分布事务功能，通过事务消息能达到分布式事务的最终一致。")]),r._v(" "),v("h4",{attrs:{id:"定时-延迟-消息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定时-延迟-消息"}},[r._v("#")]),r._v(" 定时（延迟）消息")]),r._v(" "),v("p",[r._v("定时消息（延迟队列）是指消息发送到broker后，不会立即被消费，等待特定时间投递给真正的topic。")]),r._v(" "),v("ul",[v("li",[r._v("暂存在名为"),v("code",[r._v("SCHEDULE_TOPIC_XXXX")]),r._v("的topic中")]),r._v(" "),v("li",[r._v("topic中存入特定的queue（delayTimeLevel – 1），即"),v("strong",[r._v("一个queue只存相同延迟消息，保存消费有序")])]),r._v(" "),v("li",[r._v("broker调度地消费"),v("code",[r._v("SCHEDULE_TOPIC_XXXX")]),r._v("，将消息写入真实的topic")]),r._v(" "),v("li",[r._v("第一次写入和调度写入真实topic时都会计数，因此发送数量、tps都会变高。")])]),r._v(" "),v("p",[r._v("Broker有配置项"),v("code",[r._v("messageDelayLevel")]),r._v("，默认值为"),v("code",[r._v("1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h")]),r._v("，18个level。可以配置自定义messageDelayLevel。发消息时，设置delayLevel等级。level有以下三种情况：")]),r._v(" "),v("ul",[v("li",[r._v("level == 0，消息为非延迟消息")]),r._v(" "),v("li",[r._v("1<=level<=maxLevel，消息延迟特定时间，例如level==1，延迟1s")]),r._v(" "),v("li",[r._v("level > maxLevel，则level== maxLevel，例如level==20，延迟2h")])]),r._v(" "),v("h4",{attrs:{id:"消息重试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息重试"}},[r._v("#")]),r._v(" 消息重试")]),r._v(" "),v("p",[r._v("重试机制，Consumer"),v("strong",[r._v("消费消息失败，令消息再消费一次")]),r._v("。")]),r._v(" "),v("p",[r._v("Consumer消费消息失败通常可以认为有以下几种情况：")]),r._v(" "),v("ul",[v("li",[r._v("由于消息本身的原因，例如反序列化失败，消息数据本身无法处理（例如话费充值，当前消息的手机号被注销，无法充值）等。这种错误通常需要跳过这条消息，再消费其它消息，而这条失败的消息即使立刻重试消费，99%也不成功，所以最好提供一种定时重试机制，即过10秒后再重试。")]),r._v(" "),v("li",[r._v("由于依赖的下游应用服务不可用，例如db连接不可用，外系统网络不可达等。遇到这种错误，即使跳过当前失败的消息，消费其他消息同样也会报错。这种情况建议应用sleep 30s，再消费下一条消息，这样可以减轻Broker重试消息的压力。")])]),r._v(" "),v("p",[r._v("RocketMQ会为每个消费组都设置一个Topic名称为**“%RETRY%+consumerGroup”的重试队列**（这里需要注意的是，这个Topic的重试队列是针对消费组，而不是针对每个Topic设置的），用于暂时保存因为各种异常而导致Consumer端无法消费的消息。考虑到异常恢复起来需要一些时间，会为重试队列设置多个重试级别，每个重试级别都有与之对应的重新投递延时，重试次数越多投递延时就越大。")]),r._v(" "),v("p",[r._v("RocketMQ对于重试消息的处理是先保存至Topic名称为“SCHEDULE_TOPIC_XXXX”的延迟队列中，后台定时任务按照对应的时间进行Delay后重新保存至“%RETRY%+consumerGroup”的重试队列中。")]),r._v(" "),v("h4",{attrs:{id:"消息重投"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息重投"}},[r._v("#")]),r._v(" 消息重投")]),r._v(" "),v("p",[r._v("生产者在发送消息时，同步消息失败会重投，异步消息有重试，oneway没有任何保证。")]),r._v(" "),v("p",[r._v("消息重投保证消息尽可能发送成功、不丢失，但可能会造成消息重复，消息重复在RocketMQ中是无法避免的问题。消息重复在一般情况下不会发生，当出现消息量大、网络抖动，消息重复就会是大概率事件。另外，生产者主动重发、consumer负载变化也会导致重复消息。如下方法可以设置消息重试策略：")]),r._v(" "),v("ul",[v("li",[r._v("retryTimesWhenSendFailed:同步发送失败重投次数，默认为2，因此生产者会最多尝试发送retryTimesWhenSendFailed + 1次。不会选择上次失败的broker，尝试向其他broker发送，最大程度保证消息不丢。超过重投次数，抛出异常，由客户端保证消息不丢。当出现RemotingException、MQClientException和部分MQBrokerException时会重投。")]),r._v(" "),v("li",[r._v("retryTimesWhenSendAsyncFailed:异步发送失败重试次数，异步重试不会选择其他broker，仅在同一个broker上做重试，不保证消息不丢。")]),r._v(" "),v("li",[r._v("retryAnotherBrokerWhenNotStoreOK:消息刷盘（主或备）超时或slave不可用（返回状态非SEND_OK），是否尝试发送到其他broker，默认false。十分重要消息可以开启。")])]),r._v(" "),v("h4",{attrs:{id:"流量控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流量控制"}},[r._v("#")]),r._v(" 流量控制")]),r._v(" "),v("p",[r._v("生产者流控：")]),r._v(" "),v("ul",[v("li",[v("p",[v("strong",[r._v("当broker处理能力达到瓶颈，触发")])])]),r._v(" "),v("li",[v("p",[r._v("commitLog文件被锁时间超过osPageCacheBusyTimeOutMills时，参数默认为1000ms，返回流控。")])]),r._v(" "),v("li",[v("p",[r._v("如果开启transientStorePoolEnable == true，且broker为异步刷盘的主机，且transientStorePool中资源不足，拒绝当前send请求，返回流控。")])]),r._v(" "),v("li",[v("p",[r._v("broker每隔10ms检查send请求队列头部请求的等待时间，如果超过waitTimeMillsInSendQueue，默认200ms，拒绝当前send请求，返回流控。")])]),r._v(" "),v("li",[v("p",[r._v("broker通过拒绝send 请求方式实现流量控制。")])]),r._v(" "),v("li",[v("p",[v("strong",[r._v("不会尝试消息重投")])])])]),r._v(" "),v("p",[r._v("消费者流控：")]),r._v(" "),v("ul",[v("li",[v("p",[v("strong",[r._v("当消费能力达到瓶颈，触发")])])]),r._v(" "),v("li",[v("p",[r._v("消费者本地缓存消息数超过pullThresholdForQueue时，默认1000。")])]),r._v(" "),v("li",[v("p",[r._v("消费者本地缓存消息大小超过pullThresholdSizeForQueue时，默认100MB。")])]),r._v(" "),v("li",[v("p",[r._v("消费者本地缓存消息跨度超过consumeConcurrentlyMaxSpan时，默认2000。")])]),r._v(" "),v("li",[v("p",[r._v("结果："),v("strong",[r._v("降低拉取频率")])])])]),r._v(" "),v("h4",{attrs:{id:"死信队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#死信队列"}},[r._v("#")]),r._v(" 死信队列")]),r._v(" "),v("p",[r._v("死信消息："),v("strong",[r._v("无法被正常消费的消息")]),r._v("。")]),r._v(" "),v("p",[r._v("死信队列：存储死信消息的特殊队列。")]),r._v(" "),v("p",[r._v("当一条消息初次消费失败，消息队列会自动。进行消息重试；达到最大重试次数后，若消费依然失败，则表明消费者在正常情况下无法正确地消费该消息，此时，消息队列 不会立刻将消息丢弃，而是将其发送到该消费者对应的特殊队列中。")]),r._v(" "),v("p",[r._v("在RocketMQ中，可以"),v("strong",[r._v("通过使用console控制台对死信队列中的消息进行重发")]),r._v("来使得消费者实例再次进行消费。")]),r._v(" "),v("h3",{attrs:{id:"安装部署"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装部署"}},[r._v("#")]),r._v(" 安装部署")]),r._v(" "),v("h4",{attrs:{id:"docker方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker方式"}},[r._v("#")]),r._v(" docker方式")]),r._v(" "),v("ul",[v("li",[r._v("单Master模式，本地测试用，"),v("a",{attrs:{href:"https://github.com/huhuhan/demo-docker",target:"_blank",rel:"noopener noreferrer"}},[r._v("参考文档"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=t.exports}}]);