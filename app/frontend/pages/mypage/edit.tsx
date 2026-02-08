import { useForm } from '@inertiajs/react';
import { UserProps } from "@/types";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function UserEdit ({ user }: { user: UserProps }) {
  const { data, setData, patch, processing, errors } = useForm({
    name: user.name,
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    patch('/mypage', {});
  };

  return (
    <main className="container mx-auto p-4 font-calendar">
      <div className="flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="space-y-6">

              <div className="flex items-center justify-between">
                <Label className="font-semibold">現在のユーザー名</Label>
                <span className="text-gray-700">{user.name}</span>
              </div>

              <form id='user-form' onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="name" className="font-semibold whitespace-nowrap">
                      新しいユーザー名
                    </Label>
                    <div className="col-span-2">
                      <Input
                        id="name"
                        type="text"
                        placeholder="ほげほげ"
                        required
                        value={data.name}
                        onChange={e => setData("name", e.target.value)}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button
              type="submit"
              form='user-form'
              className="cursor-pointer w-full"
              disabled={processing}>
              {processing ? '送信中...' : '更新する'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}