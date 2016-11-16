(ns assignment1.core
	(:require [clojure.string :as string])
)

(defn ^:export Copies [s s1 n] (+ s1 (string/join (repeat n s))))

(defn ^:export Factorial [n] (reduce * 1 (range 1 (inc n))))

(defn TaylorElements [x n prev] 
	(let [current (* prev x x (/ 1 2 n (- (* 2 n ) 1)))]
	(lazy-seq (cons current (TaylorElements x (inc n) current)))))

(defn abs [n] (max n (- n)))
	
(defn ^:export CosTaylor [x eps]
	(comp 
		first
		first
		(partial drop-while #(< eps (abs (- (- (first %)) (second %)))))
		partition 2 1 
	) 
	(TaylorElements x 1 x)	
)
		
(defn ^:export SqrByCathetus [a b] (/ (* a b) 2) )