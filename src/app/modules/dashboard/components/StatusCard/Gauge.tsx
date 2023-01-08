import React, { FC, useLayoutEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive'

import * as am5radar from '@amcharts/amcharts5/radar'

interface IGaugeProps {
	percentage: number
	dataColor: string
	name: string
	max?: number
}

const Gauge: FC<IGaugeProps> = ({
	percentage,
	dataColor,
	name,
	max,
}: IGaugeProps) => {
	// Data
	const data = [
		{
			category: name,
			value: percentage,
			full: 100,
			columnSettings: {
				fill: dataColor,
			},
		},
	]

	useLayoutEffect(() => {
		const root = am5.Root.new(name)

		// Set themes
		// https://www.amcharts.com/docs/v5/concepts/themes/
		root.setThemes([am5themes_Responsive.new(root)])

		// Create chart
		// https://www.amcharts.com/docs/v5/charts/radar-chart/
		const chart = root.container.children.push(
			am5radar.RadarChart.new(root, {
				panX: false,
				panY: false,
				wheelX: 'panX',
				wheelY: 'zoomX',
				innerRadius: am5.percent(80),
				startAngle: 180 - 45,
				endAngle: 360 + 45,
			}),
		)

		// Create axes and their renderers
		// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
		const xRenderer = am5radar.AxisRendererCircular.new(root, {
			// minGridDistance: 500
		})

		xRenderer.labels.template.setAll({
			radius: 1,
		})

		xRenderer.grid.template.setAll({
			forceHidden: true,
		})

		const xAxis = chart.xAxes.push(
			am5xy.ValueAxis.new(root, {
				renderer: xRenderer,
				min: 0,
				max: max || 1,
				strictMinMax: true,
				numberFormat: max ? '#' : '#%',
				tooltip: am5.Tooltip.new(root, {}),
			}),
		)

		const yRenderer = am5radar.AxisRendererRadial.new(root, {
			minGridDistance: 20,
		})

		yRenderer.labels.template.setAll({
			centerX: am5.p100,
			fontWeight: '500',
			fontSize: 14,
			templateField: 'columnSettings',
		})

		yRenderer.grid.template.setAll({
			forceHidden: true,
		})

		const yAxis = chart.yAxes.push(
			am5xy.CategoryAxis.new(root, {
				categoryField: 'category',
				renderer: yRenderer,
			}),
		)

		yAxis.data.setAll(data)

		// Add cursor
		//www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
		const cursor = chart.set(
			'cursor',
			am5radar.RadarCursor.new(root, {
				behavior: 'zoomX',
			}),
		)

		cursor.lineY.set('visible', false)

		// Create series
		// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
		const series1 = chart.series.push(
			am5radar.RadarColumnSeries.new(root, {
				xAxis: xAxis,
				yAxis: yAxis,
				clustered: false,
				valueXField: 'full',
				categoryYField: 'category',
				fill: root.interfaceColors.get('alternativeBackground'),
			}),
		)

		series1.columns.template.setAll({
			width: am5.p100,
			fillOpacity: 0.08,
			strokeOpacity: 0,
			cornerRadius: 100,
		})

		series1.data.setAll(data)

		const series2 = chart.series.push(
			am5radar.RadarColumnSeries.new(root, {
				xAxis: xAxis,
				yAxis: yAxis,
				clustered: false,
				valueXField: 'value',
				categoryYField: 'category',
			}),
		)

		series2.columns.template.setAll({
			width: am5.p100,
			strokeOpacity: 0,
			tooltipText: '{category}: {valueX}%',
			cornerRadius: 100,
			templateField: 'columnSettings',
		})

		series2.data.setAll(data)

		// Animate chart and series in
		//www.amcharts.com/docs/v5/concepts/animations/#Initial_animation

		return () => {
			root.dispose()
		}
	}, [])

	return (
		<div
			className='gauge min-w-[150px] h-[112px] m-auto bottom-5 relative'
			id={name}
		>
			<h3 className={`text-${dataColor} relative top-[65%]`}>
				{max ? `${percentage / 1000}K` : `${percentage * 100}%`}
			</h3>
		</div>
	)
}

export default Gauge
