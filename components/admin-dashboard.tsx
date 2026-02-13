"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: string
  category: string
  name: string
  description: string
  price: string
  image: string
}

export function AdminDashboard() {
  const { toast } = useToast()
  const [products, setProducts] = useState<Product[]>([])
  const [isAdding, setIsAdding] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
    price: "",
    image: "",
  })

  const categories = [
    { value: "marcos", label: "Marcos" },
    { value: "lentes", label: "Lentes" },
    { value: "accesorios", label: "Accesorios" },
    { value: "combos", label: "Combos" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? { ...formData, id: editingProduct.id } : p)))
      toast({
        title: "Producto actualizado",
        description: "El producto se ha actualizado correctamente.",
      })
    } else {
      const newProduct: Product = {
        ...formData,
        id: Date.now().toString(),
      }
      setProducts([...products, newProduct])
      toast({
        title: "Producto agregado",
        description: "El producto se ha agregado correctamente.",
      })
    }

    setFormData({ category: "", name: "", description: "", price: "", image: "" })
    setIsAdding(false)
    setEditingProduct(null)
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      category: product.category,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
    })
    setIsAdding(true)
  }

  const handleDelete = (id: string) => {
    setProducts(products.filter((p) => p.id !== id))
    toast({
      title: "Producto eliminado",
      description: "El producto se ha eliminado correctamente.",
    })
  }

  const handleCancel = () => {
    setIsAdding(false)
    setEditingProduct(null)
    setFormData({ category: "", name: "", description: "", price: "", image: "" })
  }

  return (
    <div className="space-y-8">
      {/* Add Product Button */}
      {!isAdding && (
        <Button onClick={() => setIsAdding(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Agregar Producto
        </Button>
      )}

      {/* Add/Edit Form */}
      {isAdding && (
        <Card className="p-6">
          <h2 className="font-serif text-2xl font-bold mb-6">
            {editingProduct ? "Editar Producto" : "Agregar Nuevo Producto"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="category">Categoría</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nombre del Producto</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Precio</Label>
              <Input
                id="price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="Ej: $150.000 COP"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">URL de Imagen</Label>
              <Input
                id="image"
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://ejemplo.com/imagen.jpg"
                required
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit">{editingProduct ? "Actualizar" : "Agregar"}</Button>
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancelar
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Products List */}
      <div>
        <h2 className="font-serif text-2xl font-bold mb-6">Productos</h2>
        {products.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">
              No hay productos agregados. Agrega tu primer producto para comenzar.
            </p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">
                    {categories.find((c) => c.value === product.category)?.label}
                  </div>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
                  <p className="font-bold text-primary mb-4">{product.price}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(product)}>
                      <Edit className="w-4 h-4 mr-1" />
                      Editar
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(product.id)}>
                      <Trash2 className="w-4 h-4 mr-1" />
                      Eliminar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
